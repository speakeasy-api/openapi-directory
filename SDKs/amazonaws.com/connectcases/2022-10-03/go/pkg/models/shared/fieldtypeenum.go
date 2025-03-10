// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type FieldTypeEnum string

const (
	FieldTypeEnumText         FieldTypeEnum = "Text"
	FieldTypeEnumNumber       FieldTypeEnum = "Number"
	FieldTypeEnumBoolean      FieldTypeEnum = "Boolean"
	FieldTypeEnumDateTime     FieldTypeEnum = "DateTime"
	FieldTypeEnumSingleSelect FieldTypeEnum = "SingleSelect"
)

func (e FieldTypeEnum) ToPointer() *FieldTypeEnum {
	return &e
}

func (e *FieldTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Text":
		fallthrough
	case "Number":
		fallthrough
	case "Boolean":
		fallthrough
	case "DateTime":
		fallthrough
	case "SingleSelect":
		*e = FieldTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FieldTypeEnum: %v", v)
	}
}
