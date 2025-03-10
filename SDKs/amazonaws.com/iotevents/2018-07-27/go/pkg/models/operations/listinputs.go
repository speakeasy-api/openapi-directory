// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListInputsRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The maximum number of results to be returned per request.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The token that you can use to return the next set of results.
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListInputsResponse struct {
	ContentType string
	// InternalFailureException
	InternalFailureException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// Success
	ListInputsResponse *shared.ListInputsResponse
	StatusCode         int
	RawResponse        *http.Response
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	// ThrottlingException
	ThrottlingException interface{}
}
