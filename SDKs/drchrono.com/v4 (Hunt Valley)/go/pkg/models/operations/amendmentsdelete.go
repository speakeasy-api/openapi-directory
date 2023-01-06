package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AmendmentsDeleteQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AmendmentsDeleteRequest struct {
	PathParams  AmendmentsDeletePathParams
	QueryParams AmendmentsDeleteQueryParams
	Security    AmendmentsDeleteSecurity
}

type AmendmentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
