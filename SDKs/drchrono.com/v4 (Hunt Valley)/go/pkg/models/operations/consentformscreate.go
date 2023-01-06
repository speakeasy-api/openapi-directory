package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsCreateRequest struct {
	QueryParams ConsentFormsCreateQueryParams
	Security    ConsentFormsCreateSecurity
}

type ConsentFormsCreateResponse struct {
	ConsentForm *shared.ConsentForm
	ContentType string
	StatusCode  int64
}
