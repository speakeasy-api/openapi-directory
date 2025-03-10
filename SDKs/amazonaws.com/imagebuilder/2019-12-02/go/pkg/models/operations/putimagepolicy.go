// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PutImagePolicyRequestBody struct {
	// The Amazon Resource Name (ARN) of the image that this policy should be applied to.
	ImageArn string `json:"imageArn"`
	// The policy to apply.
	Policy string `json:"policy"`
}

type PutImagePolicyRequest struct {
	RequestBody       PutImagePolicyRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutImagePolicyResponse struct {
	// CallRateLimitExceededException
	CallRateLimitExceededException interface{}
	// ClientException
	ClientException interface{}
	ContentType     string
	// ForbiddenException
	ForbiddenException interface{}
	// InvalidParameterValueException
	InvalidParameterValueException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// Success
	PutImagePolicyResponse *shared.PutImagePolicyResponse
	// ServiceException
	ServiceException interface{}
	StatusCode       int
	RawResponse      *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
}
