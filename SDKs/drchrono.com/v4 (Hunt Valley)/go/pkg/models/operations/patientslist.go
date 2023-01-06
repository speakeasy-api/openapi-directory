package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsListQueryParams struct {
	ChartID           *string `queryParam:"style=form,explode=true,name=chart_id"`
	Cursor            *string `queryParam:"style=form,explode=true,name=cursor"`
	DateOfBirth       *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor            *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Email             *string `queryParam:"style=form,explode=true,name=email"`
	Ethnicity         *string `queryParam:"style=form,explode=true,name=ethnicity"`
	FirstName         *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender            *string `queryParam:"style=form,explode=true,name=gender"`
	LastName          *string `queryParam:"style=form,explode=true,name=last_name"`
	PageSize          *int64  `queryParam:"style=form,explode=true,name=page_size"`
	PreferredLanguage *string `queryParam:"style=form,explode=true,name=preferred_language"`
	Race              *string `queryParam:"style=form,explode=true,name=race"`
	Since             *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientsList200ApplicationJSON
// Paginated Result
type PatientsList200ApplicationJSON struct {
	Data     []shared.Patient `json:"data,omitempty"`
	Next     *string          `json:"next,omitempty"`
	Previous *string          `json:"previous,omitempty"`
}

type PatientsListRequest struct {
	QueryParams PatientsListQueryParams
	Security    PatientsListSecurity
}

type PatientsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	PatientsList200ApplicationJSONObject *PatientsList200ApplicationJSON
}
