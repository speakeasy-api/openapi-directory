// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateContactListRequestBody struct {
	// The name of the contact list.
	ContactListName string `json:"ContactListName"`
	// A description of what the contact list is about.
	Description *string `json:"Description,omitempty"`
	// The tags associated with a contact list.
	Tags []shared.Tag `json:"Tags,omitempty"`
	// An interest group, theme, or label within a list. A contact list can have multiple topics.
	Topics []shared.Topic `json:"Topics,omitempty"`
}

type CreateContactListRequest struct {
	RequestBody       CreateContactListRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateContactListResponse struct {
	// AlreadyExistsException
	AlreadyExistsException interface{}
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	CreateContactListResponse map[string]interface{}
	// LimitExceededException
	LimitExceededException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
