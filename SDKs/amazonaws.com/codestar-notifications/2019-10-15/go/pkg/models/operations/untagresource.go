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
	// The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
	// The key names of the tags to remove.
	TagKeys []string `queryParam:"style=form,explode=true,name=tagKeys"`
}

type UntagResourceResponse struct {
	// ConcurrentModificationException
	ConcurrentModificationException interface{}
	ContentType                     string
	// LimitExceededException
	LimitExceededException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// Success
	UntagResourceResult map[string]interface{}
	// ValidationException
	ValidationException interface{}
}
