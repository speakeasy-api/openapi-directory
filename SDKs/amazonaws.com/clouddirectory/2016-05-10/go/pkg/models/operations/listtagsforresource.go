// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListTagsForResourceRequestBody struct {
	// The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
	MaxResults *int64 `json:"MaxResults,omitempty"`
	// The pagination token. This is for future use. Currently pagination is not supported for tagging.
	NextToken *string `json:"NextToken,omitempty"`
	// The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
	ResourceArn string `json:"ResourceArn"`
}

type ListTagsForResourceRequest struct {
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                        `queryParam:"style=form,explode=true,name=NextToken"`
	RequestBody       ListTagsForResourceRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceResponse struct {
	// AccessDeniedException
	AccessDeniedException *shared.AccessDeniedException
	ContentType           string
	// InternalServiceException
	InternalServiceException *shared.InternalServiceException
	// InvalidArnException
	InvalidArnException *shared.InvalidArnException
	// InvalidTaggingRequestException
	InvalidTaggingRequestException *shared.InvalidTaggingRequestException
	// LimitExceededException
	LimitExceededException *shared.LimitExceededException
	// Success
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	StatusCode                  int
	RawResponse                 *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException *shared.ResourceNotFoundException
	// RetryableConflictException
	RetryableConflictException *shared.RetryableConflictException
	// ValidationException
	ValidationException *shared.ValidationException
}
