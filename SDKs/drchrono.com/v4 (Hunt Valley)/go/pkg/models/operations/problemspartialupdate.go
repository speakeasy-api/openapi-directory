package operations

import (
	"openapi/pkg/models/shared"
)

type ProblemsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ProblemsPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type ProblemsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ProblemsPartialUpdateRequest struct {
	PathParams  ProblemsPartialUpdatePathParams
	QueryParams ProblemsPartialUpdateQueryParams
	Security    ProblemsPartialUpdateSecurity
}

type ProblemsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
