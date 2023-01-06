package operations

import (
	"openapi/pkg/models/shared"
)

type ProblemsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type ProblemsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ProblemsList200ApplicationJSON
// Paginated Result
type ProblemsList200ApplicationJSON struct {
	Data     []shared.PatientProblem `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type ProblemsListRequest struct {
	QueryParams ProblemsListQueryParams
	Security    ProblemsListSecurity
}

type ProblemsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	ProblemsList200ApplicationJSONObject *ProblemsList200ApplicationJSON
}
