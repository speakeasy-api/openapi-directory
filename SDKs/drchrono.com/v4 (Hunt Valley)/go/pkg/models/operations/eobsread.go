package operations

import (
	"openapi/pkg/models/shared"
)

type EobsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EobsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type EobsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type EobsReadRequest struct {
	PathParams  EobsReadPathParams
	QueryParams EobsReadQueryParams
	Security    EobsReadSecurity
}

type EobsReadResponse struct {
	ContentType string
	EOBObject   *shared.EobObject
	StatusCode  int64
}
