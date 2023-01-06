package operations

import (
	"openapi/pkg/models/shared"
)

type ProblemsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ProblemsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type ProblemsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ProblemsUpdateRequest struct {
	PathParams  ProblemsUpdatePathParams
	QueryParams ProblemsUpdateQueryParams
	Security    ProblemsUpdateSecurity
}

type ProblemsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
