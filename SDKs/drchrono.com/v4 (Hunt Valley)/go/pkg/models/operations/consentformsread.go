package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConsentFormsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsReadRequest struct {
	PathParams  ConsentFormsReadPathParams
	QueryParams ConsentFormsReadQueryParams
	Security    ConsentFormsReadSecurity
}

type ConsentFormsReadResponse struct {
	ConsentForm *shared.ConsentForm
	ContentType string
	StatusCode  int64
}
