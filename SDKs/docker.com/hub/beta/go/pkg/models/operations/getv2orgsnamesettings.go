// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetV2OrgsNameSettingsRequest struct {
	// Name of the organization.
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetV2OrgsNameSettingsResponse struct {
	ContentType string
	// Unauthorized
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
	// OK
	OrgSettings *shared.OrgSettings
}
