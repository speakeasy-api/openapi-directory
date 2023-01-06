package operations

import (
	"openapi/pkg/models/shared"
)

type PatientVaccineRecordsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientVaccineRecordsPartialUpdateQueryParams struct {
	CvxCode *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientVaccineRecordsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientVaccineRecordsPartialUpdateRequest struct {
	PathParams  PatientVaccineRecordsPartialUpdatePathParams
	QueryParams PatientVaccineRecordsPartialUpdateQueryParams
	Security    PatientVaccineRecordsPartialUpdateSecurity
}

type PatientVaccineRecordsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
