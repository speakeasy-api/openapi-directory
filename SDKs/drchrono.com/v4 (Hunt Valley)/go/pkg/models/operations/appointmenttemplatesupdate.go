package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentTemplatesUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Office  *int64 `queryParam:"style=form,explode=true,name=office"`
	Profile *int64 `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentTemplatesUpdateRequest struct {
	PathParams  AppointmentTemplatesUpdatePathParams
	QueryParams AppointmentTemplatesUpdateQueryParams
	Security    AppointmentTemplatesUpdateSecurity
}

type AppointmentTemplatesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
