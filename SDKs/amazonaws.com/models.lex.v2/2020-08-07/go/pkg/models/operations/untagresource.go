// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type UntagResourceRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The Amazon Resource Name (ARN) of the resource to remove the tags from.
	ResourceARN string `pathParam:"style=simple,explode=false,name=resourceARN"`
	// A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
	TagKeys []string `queryParam:"style=form,explode=true,name=tagKeys"`
}

type UntagResourceResponse struct {
	ContentType string
	// InternalServerException
	InternalServerException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ThrottlingException
	ThrottlingException interface{}
	// Success
	UntagResourceResponse map[string]interface{}
	// ValidationException
	ValidationException interface{}
}
