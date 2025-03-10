// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ExecutionResultCodeEnum string

const (
	ExecutionResultCodeEnumParsingFailed          ExecutionResultCodeEnum = "PARSING_FAILED"
	ExecutionResultCodeEnumVpcEndpointSetupFailed ExecutionResultCodeEnum = "VPC_ENDPOINT_SETUP_FAILED"
)

func (e ExecutionResultCodeEnum) ToPointer() *ExecutionResultCodeEnum {
	return &e
}

func (e *ExecutionResultCodeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PARSING_FAILED":
		fallthrough
	case "VPC_ENDPOINT_SETUP_FAILED":
		*e = ExecutionResultCodeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ExecutionResultCodeEnum: %v", v)
	}
}
