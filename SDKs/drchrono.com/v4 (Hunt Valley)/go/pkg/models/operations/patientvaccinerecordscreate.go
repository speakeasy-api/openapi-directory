package operations

import (
	"openapi/pkg/models/shared"
)

type PatientVaccineRecordsCreateQueryParams struct {
	CvxCode *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientVaccineRecordsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientVaccineRecordsCreateRequest struct {
	QueryParams PatientVaccineRecordsCreateQueryParams
	Security    PatientVaccineRecordsCreateSecurity
}

type PatientVaccineRecordsCreateResponse struct {
	ContentType          string
	PatientVaccineRecord *shared.PatientVaccineRecord
	StatusCode           int64
}
