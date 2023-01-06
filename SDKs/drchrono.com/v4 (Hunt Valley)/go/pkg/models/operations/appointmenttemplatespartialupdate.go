package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentTemplatesPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Office  *int64 `queryParam:"style=form,explode=true,name=office"`
	Profile *int64 `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentTemplatesPartialUpdateRequest struct {
	PathParams  AppointmentTemplatesPartialUpdatePathParams
	QueryParams AppointmentTemplatesPartialUpdateQueryParams
	Security    AppointmentTemplatesPartialUpdateSecurity
}

type AppointmentTemplatesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
