// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type SubscriptionStateEnum string

const (
	SubscriptionStateEnumActive   SubscriptionStateEnum = "ACTIVE"
	SubscriptionStateEnumInactive SubscriptionStateEnum = "INACTIVE"
)

func (e SubscriptionStateEnum) ToPointer() *SubscriptionStateEnum {
	return &e
}

func (e *SubscriptionStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ACTIVE":
		fallthrough
	case "INACTIVE":
		*e = SubscriptionStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SubscriptionStateEnum: %v", v)
	}
}
