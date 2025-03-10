// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DeploymentFailureHandlingPolicyEnum string

const (
	DeploymentFailureHandlingPolicyEnumRollback  DeploymentFailureHandlingPolicyEnum = "ROLLBACK"
	DeploymentFailureHandlingPolicyEnumDoNothing DeploymentFailureHandlingPolicyEnum = "DO_NOTHING"
)

func (e DeploymentFailureHandlingPolicyEnum) ToPointer() *DeploymentFailureHandlingPolicyEnum {
	return &e
}

func (e *DeploymentFailureHandlingPolicyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ROLLBACK":
		fallthrough
	case "DO_NOTHING":
		*e = DeploymentFailureHandlingPolicyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeploymentFailureHandlingPolicyEnum: %v", v)
	}
}
