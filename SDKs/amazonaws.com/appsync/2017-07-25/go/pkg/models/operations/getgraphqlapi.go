// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetGraphqlAPIRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The API ID for the GraphQL API.
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetGraphqlAPIResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	GetGraphqlAPIResponse *shared.GetGraphqlAPIResponse
	// InternalFailureException
	InternalFailureException interface{}
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// UnauthorizedException
	UnauthorizedException interface{}
}
