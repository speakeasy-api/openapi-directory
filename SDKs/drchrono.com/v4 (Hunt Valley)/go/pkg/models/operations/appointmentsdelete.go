package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentsDeleteQueryParams struct {
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
	Status    *string `queryParam:"style=form,explode=true,name=status"`
}

type AppointmentsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentsDeleteRequest struct {
	PathParams  AppointmentsDeletePathParams
	QueryParams AppointmentsDeleteQueryParams
	Security    AppointmentsDeleteSecurity
}

type AppointmentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
