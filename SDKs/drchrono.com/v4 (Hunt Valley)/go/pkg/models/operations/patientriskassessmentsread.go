package operations

import (
	"openapi/pkg/models/shared"
)

type PatientRiskAssessmentsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientRiskAssessmentsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientRiskAssessmentsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientRiskAssessmentsReadRequest struct {
	PathParams  PatientRiskAssessmentsReadPathParams
	QueryParams PatientRiskAssessmentsReadQueryParams
	Security    PatientRiskAssessmentsReadSecurity
}

type PatientRiskAssessmentsReadResponse struct {
	ContentType           string
	PatientRiskAssessment *shared.PatientRiskAssessment
	StatusCode            int64
}
