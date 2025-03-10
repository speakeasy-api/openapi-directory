// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type MonotonicityEnum string

const (
	MonotonicityEnumDecreasing MonotonicityEnum = "DECREASING"
	MonotonicityEnumIncreasing MonotonicityEnum = "INCREASING"
	MonotonicityEnumStatic     MonotonicityEnum = "STATIC"
)

func (e MonotonicityEnum) ToPointer() *MonotonicityEnum {
	return &e
}

func (e *MonotonicityEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DECREASING":
		fallthrough
	case "INCREASING":
		fallthrough
	case "STATIC":
		*e = MonotonicityEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MonotonicityEnum: %v", v)
	}
}
