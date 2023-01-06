package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPhysicalExamsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientPhysicalExamsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPhysicalExamsCreateRequest struct {
	QueryParams PatientPhysicalExamsCreateQueryParams
	Security    PatientPhysicalExamsCreateSecurity
}

type PatientPhysicalExamsCreateResponse struct {
	ContentType         string
	PatientPhysicalExam *shared.PatientPhysicalExam
	StatusCode          int64
}
