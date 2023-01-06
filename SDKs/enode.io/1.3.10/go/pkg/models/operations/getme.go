package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeSecurity struct {
	UserAccessToken shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetMe200ApplicationJSONLinkedVendors struct {
	IsValid *bool                                                                     `json:"isValid,omitempty"`
	Vendor  *shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum `json:"vendor,omitempty"`
}

type GetMe200ApplicationJSON struct {
	ID            *string                                `json:"id,omitempty"`
	LinkedVendors []GetMe200ApplicationJSONLinkedVendors `json:"linkedVendors,omitempty"`
}

type GetMeRequest struct {
	Security GetMeSecurity
}

type GetMeResponse struct {
	ContentType                   string
	StatusCode                    int64
	GetMe200ApplicationJSONObject *GetMe200ApplicationJSON
}
