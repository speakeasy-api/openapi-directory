// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type PointInTimeRecoveryStatusEnum string

const (
	PointInTimeRecoveryStatusEnumEnabled  PointInTimeRecoveryStatusEnum = "ENABLED"
	PointInTimeRecoveryStatusEnumDisabled PointInTimeRecoveryStatusEnum = "DISABLED"
)

func (e PointInTimeRecoveryStatusEnum) ToPointer() *PointInTimeRecoveryStatusEnum {
	return &e
}

func (e *PointInTimeRecoveryStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ENABLED":
		fallthrough
	case "DISABLED":
		*e = PointInTimeRecoveryStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PointInTimeRecoveryStatusEnum: %v", v)
	}
}
