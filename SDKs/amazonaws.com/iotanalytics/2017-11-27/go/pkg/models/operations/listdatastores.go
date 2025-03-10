// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListDatastoresRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The token for the next set of results.
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDatastoresResponse struct {
	ContentType string
	// InternalFailureException
	InternalFailureException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// Success
	ListDatastoresResponse *shared.ListDatastoresResponse
	StatusCode             int
	RawResponse            *http.Response
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	// ThrottlingException
	ThrottlingException interface{}
}
