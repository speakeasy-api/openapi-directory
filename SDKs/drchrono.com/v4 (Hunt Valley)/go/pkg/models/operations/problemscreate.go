package operations

import (
	"openapi/pkg/models/shared"
)

type ProblemsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type ProblemsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ProblemsCreateRequest struct {
	QueryParams ProblemsCreateQueryParams
	Security    ProblemsCreateSecurity
}

type ProblemsCreateResponse struct {
	ContentType    string
	PatientProblem *shared.PatientProblem
	StatusCode     int64
}
