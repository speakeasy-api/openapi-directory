package operations

import (
	"openapi/pkg/models/shared"
)

type AllergiesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AllergiesUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AllergiesUpdateRequest struct {
	PathParams  AllergiesUpdatePathParams
	QueryParams AllergiesUpdateQueryParams
	Security    AllergiesUpdateSecurity
}

type AllergiesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
