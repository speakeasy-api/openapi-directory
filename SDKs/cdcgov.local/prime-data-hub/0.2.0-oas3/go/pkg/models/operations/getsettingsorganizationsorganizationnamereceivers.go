// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSettingsOrganizationsOrganizationNameReceiversSecurity struct {
	OAuth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type GetSettingsOrganizationsOrganizationNameReceiversRequest struct {
	// Fetch receivers with this organization name
	OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
}

type GetSettingsOrganizationsOrganizationNameReceiversResponse struct {
	ContentType string
	// OK
	Receivers   []shared.Receiver
	StatusCode  int
	RawResponse *http.Response
}
