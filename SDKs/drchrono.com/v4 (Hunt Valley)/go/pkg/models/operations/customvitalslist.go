package operations

import (
	"openapi/pkg/models/shared"
)

type CustomVitalsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type CustomVitalsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CustomVitalsList200ApplicationJSON
// Paginated Result
type CustomVitalsList200ApplicationJSON struct {
	Data     []shared.CustomVitalType `json:"data,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
}

type CustomVitalsListRequest struct {
	QueryParams CustomVitalsListQueryParams
	Security    CustomVitalsListSecurity
}

type CustomVitalsListResponse struct {
	ContentType                              string
	StatusCode                               int64
	CustomVitalsList200ApplicationJSONObject *CustomVitalsList200ApplicationJSON
}
