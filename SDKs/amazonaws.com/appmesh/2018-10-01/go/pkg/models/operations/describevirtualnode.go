// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DescribeVirtualNodeRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The name of the service mesh in which the virtual node resides.
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
	// The name of the virtual node to describe.
	VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
}

type DescribeVirtualNodeResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	DescribeVirtualNodeOutput *shared.DescribeVirtualNodeOutput
	// ForbiddenException
	ForbiddenException interface{}
	// InternalServerErrorException
	InternalServerErrorException interface{}
	// NotFoundException
	NotFoundException interface{}
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	StatusCode                  int
	RawResponse                 *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
