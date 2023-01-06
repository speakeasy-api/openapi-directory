package operations

import (
	"openapi/pkg/models/shared"
)

type ProblemsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ProblemsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type ProblemsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ProblemsReadRequest struct {
	PathParams  ProblemsReadPathParams
	QueryParams ProblemsReadQueryParams
	Security    ProblemsReadSecurity
}

type ProblemsReadResponse struct {
	ContentType    string
	PatientProblem *shared.PatientProblem
	StatusCode     int64
}
