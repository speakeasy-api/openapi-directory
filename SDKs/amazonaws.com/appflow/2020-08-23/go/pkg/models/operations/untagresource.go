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
	//  The Amazon Resource Name (ARN) of the flow that you want to untag.
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
	//  The tag keys associated with the tag that you want to remove from your flow.
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
	// Success
	UntagResourceResponse map[string]interface{}
	// ValidationException
	ValidationException interface{}
}
