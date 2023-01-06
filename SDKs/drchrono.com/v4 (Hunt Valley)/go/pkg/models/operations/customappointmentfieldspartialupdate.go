package operations

import (
	"openapi/pkg/models/shared"
)

type CustomAppointmentFieldsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomAppointmentFieldsPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomAppointmentFieldsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomAppointmentFieldsPartialUpdateRequest struct {
	PathParams  CustomAppointmentFieldsPartialUpdatePathParams
	QueryParams CustomAppointmentFieldsPartialUpdateQueryParams
	Security    CustomAppointmentFieldsPartialUpdateSecurity
}

type CustomAppointmentFieldsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
