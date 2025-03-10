// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeleteTopicRuleRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The name of the rule.
	RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type DeleteTopicRuleResponse struct {
	// ConflictingResourceUpdateException
	ConflictingResourceUpdateException interface{}
	ContentType                        string
	// InternalException
	InternalException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	// UnauthorizedException
	UnauthorizedException interface{}
}
