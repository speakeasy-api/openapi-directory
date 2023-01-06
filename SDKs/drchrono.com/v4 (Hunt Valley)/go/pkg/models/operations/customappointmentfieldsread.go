package operations

import (
	"openapi/pkg/models/shared"
)

type CustomAppointmentFieldsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomAppointmentFieldsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomAppointmentFieldsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomAppointmentFieldsReadRequest struct {
	PathParams  CustomAppointmentFieldsReadPathParams
	QueryParams CustomAppointmentFieldsReadQueryParams
	Security    CustomAppointmentFieldsReadSecurity
}

type CustomAppointmentFieldsReadResponse struct {
	ContentType                string
	CustomAppointmentFieldType *shared.CustomAppointmentFieldType
	StatusCode                 int64
}
