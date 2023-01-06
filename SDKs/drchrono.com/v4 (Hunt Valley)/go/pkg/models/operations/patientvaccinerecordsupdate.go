package operations

import (
	"openapi/pkg/models/shared"
)

type PatientVaccineRecordsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientVaccineRecordsUpdateQueryParams struct {
	CvxCode *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientVaccineRecordsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientVaccineRecordsUpdateRequest struct {
	PathParams  PatientVaccineRecordsUpdatePathParams
	QueryParams PatientVaccineRecordsUpdateQueryParams
	Security    PatientVaccineRecordsUpdateSecurity
}

type PatientVaccineRecordsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
