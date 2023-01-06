package operations

import (
	"openapi/pkg/models/shared"
)

type PatientInterventionsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type PatientInterventionsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientInterventionsList200ApplicationJSON
// Paginated Result
type PatientInterventionsList200ApplicationJSON struct {
	Data     []shared.PatientIntervention `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type PatientInterventionsListRequest struct {
	QueryParams PatientInterventionsListQueryParams
	Security    PatientInterventionsListSecurity
}

type PatientInterventionsListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PatientInterventionsList200ApplicationJSONObject *PatientInterventionsList200ApplicationJSON
}
