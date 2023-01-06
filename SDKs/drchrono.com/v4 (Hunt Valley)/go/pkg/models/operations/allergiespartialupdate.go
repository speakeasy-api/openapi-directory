package operations

import (
	"openapi/pkg/models/shared"
)

type AllergiesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AllergiesPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AllergiesPartialUpdateRequest struct {
	PathParams  AllergiesPartialUpdatePathParams
	QueryParams AllergiesPartialUpdateQueryParams
	Security    AllergiesPartialUpdateSecurity
}

type AllergiesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
