package operations

import (
	"openapi/pkg/models/shared"
)

type DoctorsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DoctorsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type DoctorsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type DoctorsReadRequest struct {
	PathParams  DoctorsReadPathParams
	QueryParams DoctorsReadQueryParams
	Security    DoctorsReadSecurity
}

type DoctorsReadResponse struct {
	ContentType string
	Doctor      *shared.Doctor
	StatusCode  int64
}
