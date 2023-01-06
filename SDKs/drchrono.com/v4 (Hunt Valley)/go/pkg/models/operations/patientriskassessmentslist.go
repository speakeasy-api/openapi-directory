package operations

import (
	"openapi/pkg/models/shared"
)

type PatientRiskAssessmentsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type PatientRiskAssessmentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientRiskAssessmentsList200ApplicationJSON
// Paginated Result
type PatientRiskAssessmentsList200ApplicationJSON struct {
	Data     []shared.PatientRiskAssessment `json:"data,omitempty"`
	Next     *string                        `json:"next,omitempty"`
	Previous *string                        `json:"previous,omitempty"`
}

type PatientRiskAssessmentsListRequest struct {
	QueryParams PatientRiskAssessmentsListQueryParams
	Security    PatientRiskAssessmentsListSecurity
}

type PatientRiskAssessmentsListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PatientRiskAssessmentsList200ApplicationJSONObject *PatientRiskAssessmentsList200ApplicationJSON
}
