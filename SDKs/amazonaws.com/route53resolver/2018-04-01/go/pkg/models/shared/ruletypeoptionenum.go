// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type RuleTypeOptionEnum string

const (
	RuleTypeOptionEnumForward   RuleTypeOptionEnum = "FORWARD"
	RuleTypeOptionEnumSystem    RuleTypeOptionEnum = "SYSTEM"
	RuleTypeOptionEnumRecursive RuleTypeOptionEnum = "RECURSIVE"
)

func (e RuleTypeOptionEnum) ToPointer() *RuleTypeOptionEnum {
	return &e
}

func (e *RuleTypeOptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FORWARD":
		fallthrough
	case "SYSTEM":
		fallthrough
	case "RECURSIVE":
		*e = RuleTypeOptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RuleTypeOptionEnum: %v", v)
	}
}
