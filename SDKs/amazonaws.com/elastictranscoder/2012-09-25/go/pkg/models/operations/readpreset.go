// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReadPresetRequest struct {
	// The identifier of the preset for which you want to get detailed information.
	ID                string  `pathParam:"style=simple,explode=false,name=Id"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ReadPresetResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// IncompatibleVersionException
	IncompatibleVersionException interface{}
	// InternalServiceException
	InternalServiceException interface{}
	// Success
	ReadPresetResponse *shared.ReadPresetResponse
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ValidationException
	ValidationException interface{}
}
