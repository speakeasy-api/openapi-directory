package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentsCreateQueryParams struct {
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
	Status    *string `queryParam:"style=form,explode=true,name=status"`
}

type AppointmentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentsCreateRequest struct {
	QueryParams AppointmentsCreateQueryParams
	Security    AppointmentsCreateSecurity
}

type AppointmentsCreateResponse struct {
	Appointment *shared.Appointment
	ContentType string
	StatusCode  int64
}
