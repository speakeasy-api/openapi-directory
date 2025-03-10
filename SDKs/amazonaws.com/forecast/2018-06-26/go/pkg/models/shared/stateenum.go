// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type StateEnum string

const (
	StateEnumActive  StateEnum = "Active"
	StateEnumDeleted StateEnum = "Deleted"
)

func (e StateEnum) ToPointer() *StateEnum {
	return &e
}

func (e *StateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Active":
		fallthrough
	case "Deleted":
		*e = StateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StateEnum: %v", v)
	}
}
