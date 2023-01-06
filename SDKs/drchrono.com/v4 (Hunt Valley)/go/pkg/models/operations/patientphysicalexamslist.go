package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPhysicalExamsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type PatientPhysicalExamsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientPhysicalExamsList200ApplicationJSON
// Paginated Result
type PatientPhysicalExamsList200ApplicationJSON struct {
	Data     []shared.PatientPhysicalExam `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type PatientPhysicalExamsListRequest struct {
	QueryParams PatientPhysicalExamsListQueryParams
	Security    PatientPhysicalExamsListSecurity
}

type PatientPhysicalExamsListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PatientPhysicalExamsList200ApplicationJSONObject *PatientPhysicalExamsList200ApplicationJSON
}
