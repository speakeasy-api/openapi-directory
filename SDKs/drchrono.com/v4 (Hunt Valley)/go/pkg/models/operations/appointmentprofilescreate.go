package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type AppointmentProfilesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentProfilesCreateRequest struct {
	QueryParams AppointmentProfilesCreateQueryParams
	Security    AppointmentProfilesCreateSecurity
}

type AppointmentProfilesCreateResponse struct {
	AppointmentProfile *shared.AppointmentProfile
	ContentType        string
	StatusCode         int64
}
