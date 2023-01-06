package operations

import (
	"openapi/pkg/models/shared"
)

type AllergiesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// AllergiesList200ApplicationJSON
// Paginated Result
type AllergiesList200ApplicationJSON struct {
	Data     []shared.PatientAllergy `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type AllergiesListRequest struct {
	QueryParams AllergiesListQueryParams
	Security    AllergiesListSecurity
}

type AllergiesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	AllergiesList200ApplicationJSONObject *AllergiesList200ApplicationJSON
}
