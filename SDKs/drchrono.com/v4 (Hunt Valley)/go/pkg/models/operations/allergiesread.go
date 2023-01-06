package operations

import (
	"openapi/pkg/models/shared"
)

type AllergiesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AllergiesReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AllergiesReadRequest struct {
	PathParams  AllergiesReadPathParams
	QueryParams AllergiesReadQueryParams
	Security    AllergiesReadSecurity
}

type AllergiesReadResponse struct {
	ContentType    string
	PatientAllergy *shared.PatientAllergy
	StatusCode     int64
}
