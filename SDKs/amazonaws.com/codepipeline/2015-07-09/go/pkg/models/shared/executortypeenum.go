// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ExecutorTypeEnum string

const (
	ExecutorTypeEnumJobWorker ExecutorTypeEnum = "JobWorker"
	ExecutorTypeEnumLambda    ExecutorTypeEnum = "Lambda"
)

func (e ExecutorTypeEnum) ToPointer() *ExecutorTypeEnum {
	return &e
}

func (e *ExecutorTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "JobWorker":
		fallthrough
	case "Lambda":
		*e = ExecutorTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ExecutorTypeEnum: %v", v)
	}
}
