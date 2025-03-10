// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AssociateUserAccessLoggingSettingsRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The ARN of the web portal.
	PortalArn string `pathParam:"style=simple,explode=false,name=portalArn"`
	// The ARN of the user access logging settings.
	UserAccessLoggingSettingsArn string `queryParam:"style=form,explode=true,name=userAccessLoggingSettingsArn"`
}

type AssociateUserAccessLoggingSettingsResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// Success
	AssociateUserAccessLoggingSettingsResponse *shared.AssociateUserAccessLoggingSettingsResponse
	// ConflictException
	ConflictException interface{}
	ContentType       string
	// InternalServerException
	InternalServerException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
