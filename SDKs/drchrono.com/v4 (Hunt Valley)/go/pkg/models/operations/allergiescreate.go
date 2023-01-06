package operations

import (
	"openapi/pkg/models/shared"
)

type AllergiesCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AllergiesCreateRequest struct {
	QueryParams AllergiesCreateQueryParams
	Security    AllergiesCreateSecurity
}

type AllergiesCreateResponse struct {
	ContentType    string
	PatientAllergy *shared.PatientAllergy
	StatusCode     int64
}
