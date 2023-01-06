package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsListQueryParams struct {
	Cursor         *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	PageSize       *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientLabResultsList200ApplicationJSON
// Paginated Result
type PatientLabResultsList200ApplicationJSON struct {
	Data     []shared.PatientLabResultSet `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type PatientLabResultsListRequest struct {
	QueryParams PatientLabResultsListQueryParams
	Security    PatientLabResultsListSecurity
}

type PatientLabResultsListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PatientLabResultsList200ApplicationJSONObject *PatientLabResultsList200ApplicationJSON
}
