// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type PostRegistrationSecurity struct {
	GmaAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

// PostRegistrationRequestBody - code and secret to accept the invitation
type PostRegistrationRequestBody struct {
	Code   *string `json:"Code,omitempty"`
	Secret *string `json:"Secret,omitempty"`
}

type PostRegistration201ApplicationJSONPrivate struct {
	FolderID *string `json:"FolderId,omitempty"`
	SpaceID  *string `json:"SpaceId,omitempty"`
}

// PostRegistration201ApplicationJSON - Id of the private space and the contract folder
type PostRegistration201ApplicationJSON struct {
	Private *PostRegistration201ApplicationJSONPrivate `json:"Private,omitempty"`
}

type PostRegistrationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Id of the private space and the contract folder
	PostRegistration201ApplicationJSONObject *PostRegistration201ApplicationJSON
}
