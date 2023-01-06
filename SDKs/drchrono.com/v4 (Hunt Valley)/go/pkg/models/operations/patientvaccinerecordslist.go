package operations

import (
	"openapi/pkg/models/shared"
)

type PatientVaccineRecordsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	CvxCode  *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientVaccineRecordsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientVaccineRecordsList200ApplicationJSON
// Paginated Result
type PatientVaccineRecordsList200ApplicationJSON struct {
	Data     []shared.PatientVaccineRecord `json:"data,omitempty"`
	Next     *string                       `json:"next,omitempty"`
	Previous *string                       `json:"previous,omitempty"`
}

type PatientVaccineRecordsListRequest struct {
	QueryParams PatientVaccineRecordsListQueryParams
	Security    PatientVaccineRecordsListSecurity
}

type PatientVaccineRecordsListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PatientVaccineRecordsList200ApplicationJSONObject *PatientVaccineRecordsList200ApplicationJSON
}
