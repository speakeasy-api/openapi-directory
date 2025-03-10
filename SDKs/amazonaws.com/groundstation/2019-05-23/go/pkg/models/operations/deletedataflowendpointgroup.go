// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DeleteDataflowEndpointGroupRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// UUID of a dataflow endpoint group.
	DataflowEndpointGroupID string `pathParam:"style=simple,explode=false,name=dataflowEndpointGroupId"`
}

type DeleteDataflowEndpointGroupResponse struct {
	ContentType string
	// Success
	DataflowEndpointGroupIDResponse *shared.DataflowEndpointGroupIDResponse
	// DependencyException
	DependencyException interface{}
	// InvalidParameterException
	InvalidParameterException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
}
