// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PutLaunchProfileMembersRequestBody struct {
	// The ID of the identity store.
	IdentityStoreID string `json:"identityStoreId"`
	// A list of members.
	Members []shared.NewLaunchProfileMember `json:"members"`
}

type PutLaunchProfileMembersRequest struct {
	RequestBody   PutLaunchProfileMembersRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	// Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The ID of the launch profile used to control access from the streaming session.
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	// The studio ID.
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type PutLaunchProfileMembersResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// ConflictException
	ConflictException interface{}
	ContentType       string
	// InternalServerErrorException
	InternalServerErrorException interface{}
	// Success
	PutLaunchProfileMembersResponse map[string]interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ServiceQuotaExceededException
	ServiceQuotaExceededException interface{}
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
