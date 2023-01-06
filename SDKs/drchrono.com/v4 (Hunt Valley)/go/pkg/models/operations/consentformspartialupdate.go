package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConsentFormsPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsPartialUpdateRequest struct {
	PathParams  ConsentFormsPartialUpdatePathParams
	QueryParams ConsentFormsPartialUpdateQueryParams
	Security    ConsentFormsPartialUpdateSecurity
}

type ConsentFormsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
