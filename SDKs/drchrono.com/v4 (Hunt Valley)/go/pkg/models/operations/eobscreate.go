package operations

import (
	"openapi/pkg/models/shared"
)

type EobsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type EobsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type EobsCreateRequest struct {
	QueryParams EobsCreateQueryParams
	Security    EobsCreateSecurity
}

type EobsCreateResponse struct {
	ContentType string
	EOBObject   *shared.EobObject
	StatusCode  int64
}
