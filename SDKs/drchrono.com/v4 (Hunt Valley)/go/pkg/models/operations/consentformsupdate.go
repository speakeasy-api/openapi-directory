package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConsentFormsUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsUpdateRequest struct {
	PathParams  ConsentFormsUpdatePathParams
	QueryParams ConsentFormsUpdateQueryParams
	Security    ConsentFormsUpdateSecurity
}

type ConsentFormsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
