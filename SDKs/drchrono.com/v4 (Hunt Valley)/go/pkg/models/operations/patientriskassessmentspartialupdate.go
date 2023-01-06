package operations

import (
	"openapi/pkg/models/shared"
)

type PatientRiskAssessmentsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientRiskAssessmentsPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientRiskAssessmentsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientRiskAssessmentsPartialUpdateRequest struct {
	PathParams  PatientRiskAssessmentsPartialUpdatePathParams
	QueryParams PatientRiskAssessmentsPartialUpdateQueryParams
	Security    PatientRiskAssessmentsPartialUpdateSecurity
}

type PatientRiskAssessmentsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
