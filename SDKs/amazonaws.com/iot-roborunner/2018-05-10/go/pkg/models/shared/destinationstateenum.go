// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// DestinationStateEnum - State of the destination.
type DestinationStateEnum string

const (
	DestinationStateEnumEnabled        DestinationStateEnum = "ENABLED"
	DestinationStateEnumDisabled       DestinationStateEnum = "DISABLED"
	DestinationStateEnumDecommissioned DestinationStateEnum = "DECOMMISSIONED"
)

func (e DestinationStateEnum) ToPointer() *DestinationStateEnum {
	return &e
}

func (e *DestinationStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ENABLED":
		fallthrough
	case "DISABLED":
		fallthrough
	case "DECOMMISSIONED":
		*e = DestinationStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DestinationStateEnum: %v", v)
	}
}
