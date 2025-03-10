// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetMeSecurity struct {
	UserAccessToken string `security:"scheme,type=oauth2,name=Authorization"`
}

type GetMe200ApplicationJSONLinkedVendors struct {
	// Whether the provided credentials are currently valid. A `false` value here indicates that a credential has become invalidated, and [Link User](#operation/postUsersUseridLink) should be used to get new credentials from this user.
	IsValid *bool `json:"isValid,omitempty"`
	// Vendor ID
	Vendor *shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum `json:"vendor,omitempty"`
}

// GetMe200ApplicationJSON - Successful
type GetMe200ApplicationJSON struct {
	ID            *string                                `json:"id,omitempty"`
	LinkedVendors []GetMe200ApplicationJSONLinkedVendors `json:"linkedVendors,omitempty"`
}

type GetMeResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful
	GetMe200ApplicationJSONObject *GetMe200ApplicationJSON
}
