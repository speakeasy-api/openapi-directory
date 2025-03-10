// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeleteDedicatedIPPoolRequest struct {
	// The name of the dedicated IP pool that you want to delete.
	PoolName          string  `pathParam:"style=simple,explode=false,name=PoolName"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteDedicatedIPPoolResponse struct {
	// BadRequestException
	BadRequestException interface{}
	// ConcurrentModificationException
	ConcurrentModificationException interface{}
	ContentType                     string
	// Success
	DeleteDedicatedIPPoolResponse map[string]interface{}
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
