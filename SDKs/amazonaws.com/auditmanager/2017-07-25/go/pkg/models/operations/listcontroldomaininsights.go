// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListControlDomainInsightsRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// Represents the maximum number of results on a page or for an API request call.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The pagination token that's used to fetch the next set of results.
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListControlDomainInsightsResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InternalServerException
	InternalServerException interface{}
	// Success
	ListControlDomainInsightsResponse *shared.ListControlDomainInsightsResponse
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ValidationException
	ValidationException interface{}
}
