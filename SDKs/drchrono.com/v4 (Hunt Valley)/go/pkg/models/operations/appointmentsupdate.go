package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentsUpdateQueryParams struct {
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
	Status    *string `queryParam:"style=form,explode=true,name=status"`
}

type AppointmentsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentsUpdateRequest struct {
	PathParams  AppointmentsUpdatePathParams
	QueryParams AppointmentsUpdateQueryParams
	Security    AppointmentsUpdateSecurity
}

type AppointmentsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
