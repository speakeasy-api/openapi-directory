// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateFirewallPolicyXAmzTargetEnum
type CreateFirewallPolicyXAmzTargetEnum string

const (
	CreateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112CreateFirewallPolicy CreateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.CreateFirewallPolicy"
)

func (e CreateFirewallPolicyXAmzTargetEnum) ToPointer() *CreateFirewallPolicyXAmzTargetEnum {
	return &e
}

func (e *CreateFirewallPolicyXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "NetworkFirewall_20201112.CreateFirewallPolicy":
		*e = CreateFirewallPolicyXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateFirewallPolicyXAmzTargetEnum: %v", v)
	}
}

type CreateFirewallPolicyRequest struct {
	CreateFirewallPolicyRequest shared.CreateFirewallPolicyRequest `request:"mediaType=application/json"`
	XAmzAlgorithm               *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256           *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential              *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                    *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken           *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature               *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders           *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                  CreateFirewallPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateFirewallPolicyResponse struct {
	ContentType string
	// Success
	CreateFirewallPolicyResponse *shared.CreateFirewallPolicyResponse
	// InsufficientCapacityException
	InsufficientCapacityException interface{}
	// InternalServerError
	InternalServerError interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// LimitExceededException
	LimitExceededException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// ThrottlingException
	ThrottlingException interface{}
}
