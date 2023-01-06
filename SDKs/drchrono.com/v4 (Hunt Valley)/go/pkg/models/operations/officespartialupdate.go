package operations

import (
	"openapi/pkg/models/shared"
)

type OfficesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OfficesPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type OfficesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type OfficesPartialUpdateRequest struct {
	PathParams  OfficesPartialUpdatePathParams
	QueryParams OfficesPartialUpdateQueryParams
	Security    OfficesPartialUpdateSecurity
}

type OfficesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
