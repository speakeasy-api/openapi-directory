package operations

import (
	"openapi/pkg/models/shared"
)

type DoctorsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type DoctorsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// DoctorsList200ApplicationJSON
// Paginated Result
type DoctorsList200ApplicationJSON struct {
	Data     []shared.Doctor `json:"data,omitempty"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
}

type DoctorsListRequest struct {
	QueryParams DoctorsListQueryParams
	Security    DoctorsListSecurity
}

type DoctorsListResponse struct {
	ContentType                         string
	StatusCode                          int64
	DoctorsList200ApplicationJSONObject *DoctorsList200ApplicationJSON
}
