package operations

import (
	"openapi/pkg/models/shared"
)

type OfficesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OfficesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type OfficesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type OfficesReadRequest struct {
	PathParams  OfficesReadPathParams
	QueryParams OfficesReadQueryParams
	Security    OfficesReadSecurity
}

type OfficesReadResponse struct {
	ContentType string
	Office      *shared.Office
	StatusCode  int64
}
