package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateOrganizationUserPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type UpdateOrganizationUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

// UpdateOrganizationUser200ApplicationJSONLicense
// Current active license of the user
type UpdateOrganizationUser200ApplicationJSONLicense struct {
	Active         *bool                      `json:"active,omitempty"`
	ExpirationDate *time.Time                 `json:"expirationDate,omitempty"`
	ID             *string                    `json:"id,omitempty"`
	Mode           *shared.LicenseModeEnum    `json:"mode,omitempty"`
	Source         *shared.LicenseSourcesEnum `json:"source,omitempty"`
}

type UpdateOrganizationUser200ApplicationJSON struct {
	Email            *string                                          `json:"email,omitempty"`
	LastActivityDate *time.Time                                       `json:"lastActivityDate,omitempty"`
	License          *UpdateOrganizationUser200ApplicationJSONLicense `json:"license,omitempty"`
}

type UpdateOrganizationUserRequest struct {
	PathParams UpdateOrganizationUserPathParams
	Request    shared.UserAdminUpdate `request:"mediaType=application/json"`
	Security   UpdateOrganizationUserSecurity
}

type UpdateOrganizationUserResponse struct {
	ContentType                                    string
	FlatErrorResponse                              *shared.FlatErrorResponse
	StatusCode                                     int64
	UpdateOrganizationUser200ApplicationJSONObject *UpdateOrganizationUser200ApplicationJSON
}
