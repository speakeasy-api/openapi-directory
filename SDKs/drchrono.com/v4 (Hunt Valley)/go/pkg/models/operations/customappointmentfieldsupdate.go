package operations

import (
	"openapi/pkg/models/shared"
)

type CustomAppointmentFieldsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomAppointmentFieldsUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomAppointmentFieldsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomAppointmentFieldsUpdateRequest struct {
	PathParams  CustomAppointmentFieldsUpdatePathParams
	QueryParams CustomAppointmentFieldsUpdateQueryParams
	Security    CustomAppointmentFieldsUpdateSecurity
}

type CustomAppointmentFieldsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
