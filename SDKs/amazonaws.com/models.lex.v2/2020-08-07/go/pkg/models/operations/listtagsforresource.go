// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListTagsForResourceRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The Amazon Resource Name (ARN) of the resource to get a list of tags for.
	ResourceARN string `pathParam:"style=simple,explode=false,name=resourceARN"`
}

type ListTagsForResourceResponse struct {
	ContentType string
	// InternalServerException
	InternalServerException interface{}
	// Success
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
