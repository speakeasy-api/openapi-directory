package operations

import (
	"openapi/pkg/models/shared"
)

type PatientRiskAssessmentsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientRiskAssessmentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientRiskAssessmentsCreateRequest struct {
	QueryParams PatientRiskAssessmentsCreateQueryParams
	Security    PatientRiskAssessmentsCreateSecurity
}

type PatientRiskAssessmentsCreateResponse struct {
	ContentType           string
	PatientRiskAssessment *shared.PatientRiskAssessment
	StatusCode            int64
}
