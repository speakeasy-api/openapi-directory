// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ScopeEnum string

const (
	ScopeEnumEntity    ScopeEnum = "ENTITY"
	ScopeEnumWorkspace ScopeEnum = "WORKSPACE"
)

func (e ScopeEnum) ToPointer() *ScopeEnum {
	return &e
}

func (e *ScopeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ENTITY":
		fallthrough
	case "WORKSPACE":
		*e = ScopeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ScopeEnum: %v", v)
	}
}
