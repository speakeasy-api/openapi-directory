package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentTemplatesDeleteQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Office  *int64 `queryParam:"style=form,explode=true,name=office"`
	Profile *int64 `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentTemplatesDeleteRequest struct {
	PathParams  AppointmentTemplatesDeletePathParams
	QueryParams AppointmentTemplatesDeleteQueryParams
	Security    AppointmentTemplatesDeleteSecurity
}

type AppointmentTemplatesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
