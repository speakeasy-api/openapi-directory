// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type SyncExecutionStatusEnum string

const (
	SyncExecutionStatusEnumSucceeded SyncExecutionStatusEnum = "SUCCEEDED"
	SyncExecutionStatusEnumFailed    SyncExecutionStatusEnum = "FAILED"
	SyncExecutionStatusEnumTimedOut  SyncExecutionStatusEnum = "TIMED_OUT"
)

func (e SyncExecutionStatusEnum) ToPointer() *SyncExecutionStatusEnum {
	return &e
}

func (e *SyncExecutionStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SUCCEEDED":
		fallthrough
	case "FAILED":
		fallthrough
	case "TIMED_OUT":
		*e = SyncExecutionStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SyncExecutionStatusEnum: %v", v)
	}
}
