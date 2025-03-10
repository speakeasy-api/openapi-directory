// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type RuleTypeEnum string

const (
	RuleTypeEnumValidity      RuleTypeEnum = "VALIDITY"
	RuleTypeEnumCompatibility RuleTypeEnum = "COMPATIBILITY"
)

func (e RuleTypeEnum) ToPointer() *RuleTypeEnum {
	return &e
}

func (e *RuleTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "VALIDITY":
		fallthrough
	case "COMPATIBILITY":
		*e = RuleTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RuleTypeEnum: %v", v)
	}
}
