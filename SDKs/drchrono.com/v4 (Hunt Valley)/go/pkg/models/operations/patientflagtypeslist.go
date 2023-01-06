package operations

import (
	"openapi/pkg/models/shared"
)

type PatientFlagTypesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PatientFlagTypesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientFlagTypesList200ApplicationJSON
// Paginated Result
type PatientFlagTypesList200ApplicationJSON struct {
	Data     []shared.PatientFlagType `json:"data,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
}

type PatientFlagTypesListRequest struct {
	QueryParams PatientFlagTypesListQueryParams
	Security    PatientFlagTypesListSecurity
}

type PatientFlagTypesListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	PatientFlagTypesList200ApplicationJSONObject *PatientFlagTypesList200ApplicationJSON
}
