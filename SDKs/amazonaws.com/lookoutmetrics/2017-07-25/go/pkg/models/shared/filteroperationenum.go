// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type FilterOperationEnum string

const (
	FilterOperationEnumEquals FilterOperationEnum = "EQUALS"
)

func (e FilterOperationEnum) ToPointer() *FilterOperationEnum {
	return &e
}

func (e *FilterOperationEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "EQUALS":
		*e = FilterOperationEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FilterOperationEnum: %v", v)
	}
}
