package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Office  *int64 `queryParam:"style=form,explode=true,name=office"`
	Profile *int64 `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentTemplatesCreateRequest struct {
	QueryParams AppointmentTemplatesCreateQueryParams
	Security    AppointmentTemplatesCreateSecurity
}

type AppointmentTemplatesCreateResponse struct {
	AppointmentTemplate *shared.AppointmentTemplate
	ContentType         string
	StatusCode          int64
}
