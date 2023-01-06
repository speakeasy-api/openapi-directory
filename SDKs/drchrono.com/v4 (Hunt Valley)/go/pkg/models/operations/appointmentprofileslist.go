package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type AppointmentProfilesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// AppointmentProfilesList200ApplicationJSON
// Paginated Result
type AppointmentProfilesList200ApplicationJSON struct {
	Data     []shared.AppointmentProfile `json:"data,omitempty"`
	Next     *string                     `json:"next,omitempty"`
	Previous *string                     `json:"previous,omitempty"`
}

type AppointmentProfilesListRequest struct {
	QueryParams AppointmentProfilesListQueryParams
	Security    AppointmentProfilesListSecurity
}

type AppointmentProfilesListResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	AppointmentProfilesList200ApplicationJSONObject *AppointmentProfilesList200ApplicationJSON
}
