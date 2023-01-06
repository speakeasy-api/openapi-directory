package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPhysicalExamsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientPhysicalExamsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientPhysicalExamsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPhysicalExamsReadRequest struct {
	PathParams  PatientPhysicalExamsReadPathParams
	QueryParams PatientPhysicalExamsReadQueryParams
	Security    PatientPhysicalExamsReadSecurity
}

type PatientPhysicalExamsReadResponse struct {
	ContentType         string
	PatientPhysicalExam *shared.PatientPhysicalExam
	StatusCode          int64
}
