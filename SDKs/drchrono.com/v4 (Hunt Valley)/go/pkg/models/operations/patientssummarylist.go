package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsSummaryListQueryParams struct {
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	DateOfBirth *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	FirstName   *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender      *string `queryParam:"style=form,explode=true,name=gender"`
	LastName    *string `queryParam:"style=form,explode=true,name=last_name"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsSummaryListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientsSummaryList200ApplicationJSON
// Paginated Result
type PatientsSummaryList200ApplicationJSON struct {
	Data     []shared.Patient `json:"data,omitempty"`
	Next     *string          `json:"next,omitempty"`
	Previous *string          `json:"previous,omitempty"`
}

type PatientsSummaryListRequest struct {
	QueryParams PatientsSummaryListQueryParams
	Security    PatientsSummaryListSecurity
}

type PatientsSummaryListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PatientsSummaryList200ApplicationJSONObject *PatientsSummaryList200ApplicationJSON
}
