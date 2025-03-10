// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetBulkDeploymentStatusRequest struct {
	// The ID of the bulk deployment.
	BulkDeploymentID  string  `pathParam:"style=simple,explode=false,name=BulkDeploymentId"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBulkDeploymentStatusResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	GetBulkDeploymentStatusResponse *shared.GetBulkDeploymentStatusResponse
	StatusCode                      int
	RawResponse                     *http.Response
}
