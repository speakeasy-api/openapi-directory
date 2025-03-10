// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

// ListObjectParentPathsRequestBodyObjectReference - The reference that identifies an object.
type ListObjectParentPathsRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectParentPathsRequestBody struct {
	// The maximum number of items to be retrieved in a single call. This is an approximate number.
	MaxResults *int64 `json:"MaxResults,omitempty"`
	// The pagination token.
	NextToken *string `json:"NextToken,omitempty"`
	// The reference that identifies an object.
	ObjectReference ListObjectParentPathsRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectParentPathsRequest struct {
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                          `queryParam:"style=form,explode=true,name=NextToken"`
	RequestBody       ListObjectParentPathsRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The ARN of the directory to which the parent path applies.
	XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type ListObjectParentPathsResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// DirectoryNotEnabledException
	DirectoryNotEnabledException interface{}
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidArnException
	InvalidArnException interface{}
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	// LimitExceededException
	LimitExceededException interface{}
	// Success
	ListObjectParentPathsResponse *shared.ListObjectParentPathsResponse
	StatusCode                    int
	RawResponse                   *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// RetryableConflictException
	RetryableConflictException interface{}
	// ValidationException
	ValidationException interface{}
}
