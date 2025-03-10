// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package utils

import (
	"fmt"
	"net/url"
	"reflect"
	"strings"
	"time"

	"openapi/pkg/types"
)

func populateForm(paramName string, explode bool, objType reflect.Type, objValue reflect.Value, getFieldName func(reflect.StructField) string) url.Values {
	formValues := url.Values{}

	if objType.Kind() == reflect.Pointer {
		if objValue.IsNil() {
			return formValues
		}
		objType = objType.Elem()
		objValue = objValue.Elem()
	}

	switch objType.Kind() {
	case reflect.Struct:
		switch objValue.Interface().(type) {
		case time.Time:
			formValues.Add(paramName, valToString(objValue.Interface()))
		case types.Date:
			formValues.Add(paramName, valToString(objValue.Interface()))
		default:
			var items []string

			for i := 0; i < objType.NumField(); i++ {
				fieldType := objType.Field(i)
				valType := objValue.Field(i)

				if valType.Kind() == reflect.Pointer {
					if valType.IsNil() {
						continue
					}

					valType = valType.Elem()
				}

				fieldName := getFieldName(fieldType)
				if fieldName == "" {
					continue
				}

				if explode {
					formValues.Add(fieldName, valToString(valType.Interface()))
				} else {
					items = append(items, fmt.Sprintf("%s,%s", fieldName, valToString(valType.Interface())))
				}
			}

			if len(items) > 0 {
				formValues.Add(paramName, strings.Join(items, ","))
			}
		}
	case reflect.Map:
		items := []string{}

		iter := objValue.MapRange()
		for iter.Next() {
			if explode {
				formValues.Add(iter.Key().String(), valToString(iter.Value().Interface()))
			} else {
				items = append(items, fmt.Sprintf("%s,%s", iter.Key().String(), valToString(iter.Value().Interface())))
			}
		}

		if len(items) > 0 {
			formValues.Add(paramName, strings.Join(items, ","))
		}
	case reflect.Slice, reflect.Array:
		values := parseFormStyleArray(explode, objValue)
		for _, v := range values {
			formValues.Add(paramName, v)
		}
	default:
		formValues.Add(paramName, valToString(objValue.Interface()))
	}

	return formValues
}

func parseFormStyleArray(explode bool, objValue reflect.Value) []string {
	values := []string{}
	items := []string{}

	for i := 0; i < objValue.Len(); i++ {
		if explode {
			values = append(values, valToString(objValue.Index(i).Interface()))
		} else {
			items = append(items, valToString(objValue.Index(i).Interface()))
		}
	}

	if len(items) > 0 {
		values = append(values, strings.Join(items, ","))
	}

	return values
}
