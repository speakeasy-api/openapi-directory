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
	// A FinSpace resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN).
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
	// The tag keys (names) of one or more tags to be removed.
	TagKeys []string `queryParam:"style=form,explode=true,name=tagKeys"`
}

type UntagResourceResponse struct {
	ContentType string
	// InternalServerException
	InternalServerException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// Success
	UntagResourceResponse map[string]interface{}
}
