package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentTemplatesReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Office  *int64 `queryParam:"style=form,explode=true,name=office"`
	Profile *int64 `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentTemplatesReadRequest struct {
	PathParams  AppointmentTemplatesReadPathParams
	QueryParams AppointmentTemplatesReadQueryParams
	Security    AppointmentTemplatesReadSecurity
}

type AppointmentTemplatesReadResponse struct {
	AppointmentTemplate *shared.AppointmentTemplate
	ContentType         string
	StatusCode          int64
}
