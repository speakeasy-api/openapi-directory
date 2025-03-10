// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PutResolverRulePolicyXAmzTargetEnum
type PutResolverRulePolicyXAmzTargetEnum string

const (
	PutResolverRulePolicyXAmzTargetEnumRoute53ResolverPutResolverRulePolicy PutResolverRulePolicyXAmzTargetEnum = "Route53Resolver.PutResolverRulePolicy"
)

func (e PutResolverRulePolicyXAmzTargetEnum) ToPointer() *PutResolverRulePolicyXAmzTargetEnum {
	return &e
}

func (e *PutResolverRulePolicyXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Route53Resolver.PutResolverRulePolicy":
		*e = PutResolverRulePolicyXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PutResolverRulePolicyXAmzTargetEnum: %v", v)
	}
}

type PutResolverRulePolicyRequest struct {
	PutResolverRulePolicyRequest shared.PutResolverRulePolicyRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256            *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential               *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                     *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken            *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders            *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                   PutResolverRulePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutResolverRulePolicyResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InternalServiceErrorException
	InternalServiceErrorException interface{}
	// InvalidParameterException
	InvalidParameterException interface{}
	// InvalidPolicyDocument
	InvalidPolicyDocument interface{}
	// Success
	PutResolverRulePolicyResponse *shared.PutResolverRulePolicyResponse
	StatusCode                    int
	RawResponse                   *http.Response
	// UnknownResourceException
	UnknownResourceException interface{}
}
