package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsUnapplyFromAppointmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConsentFormsUnapplyFromAppointmentQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsUnapplyFromAppointmentSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsUnapplyFromAppointmentRequest struct {
	PathParams  ConsentFormsUnapplyFromAppointmentPathParams
	QueryParams ConsentFormsUnapplyFromAppointmentQueryParams
	Security    ConsentFormsUnapplyFromAppointmentSecurity
}

type ConsentFormsUnapplyFromAppointmentResponse struct {
	ContentType string
	StatusCode  int64
}
