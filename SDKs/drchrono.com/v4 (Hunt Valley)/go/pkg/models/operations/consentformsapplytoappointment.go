package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsApplyToAppointmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConsentFormsApplyToAppointmentQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ConsentFormsApplyToAppointmentSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ConsentFormsApplyToAppointmentRequest struct {
	PathParams  ConsentFormsApplyToAppointmentPathParams
	QueryParams ConsentFormsApplyToAppointmentQueryParams
	Security    ConsentFormsApplyToAppointmentSecurity
}

type ConsentFormsApplyToAppointmentResponse struct {
	ContentType string
	StatusCode  int64
}
