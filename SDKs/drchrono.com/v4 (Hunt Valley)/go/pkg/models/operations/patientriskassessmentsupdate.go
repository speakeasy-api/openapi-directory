package operations

import (
	"openapi/pkg/models/shared"
)

type PatientRiskAssessmentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientRiskAssessmentsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientRiskAssessmentsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientRiskAssessmentsUpdateRequest struct {
	PathParams  PatientRiskAssessmentsUpdatePathParams
	QueryParams PatientRiskAssessmentsUpdateQueryParams
	Security    PatientRiskAssessmentsUpdateSecurity
}

type PatientRiskAssessmentsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
