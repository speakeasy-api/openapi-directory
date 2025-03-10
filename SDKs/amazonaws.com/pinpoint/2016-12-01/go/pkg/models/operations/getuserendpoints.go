// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetUserEndpointsRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	// The unique identifier for the user.
	UserID string `pathParam:"style=simple,explode=false,name=user-id"`
}

type GetUserEndpointsResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// ForbiddenException
	ForbiddenException interface{}
	// Success
	GetUserEndpointsResponse *shared.GetUserEndpointsResponse
	// InternalServerErrorException
	InternalServerErrorException interface{}
	// MethodNotAllowedException
	MethodNotAllowedException interface{}
	// NotFoundException
	NotFoundException interface{}
	// PayloadTooLargeException
	PayloadTooLargeException interface{}
	StatusCode               int
	RawResponse              *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
