package operations

import (
	"openapi/pkg/models/shared"
)

type CustomAppointmentFieldsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomAppointmentFieldsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomAppointmentFieldsCreateRequest struct {
	QueryParams CustomAppointmentFieldsCreateQueryParams
	Security    CustomAppointmentFieldsCreateSecurity
}

type CustomAppointmentFieldsCreateResponse struct {
	ContentType                string
	CustomAppointmentFieldType *shared.CustomAppointmentFieldType
	StatusCode                 int64
}
