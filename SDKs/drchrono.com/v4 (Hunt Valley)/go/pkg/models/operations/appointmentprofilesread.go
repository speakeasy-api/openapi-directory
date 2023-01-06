package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentProfilesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type AppointmentProfilesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentProfilesReadRequest struct {
	PathParams  AppointmentProfilesReadPathParams
	QueryParams AppointmentProfilesReadQueryParams
	Security    AppointmentProfilesReadSecurity
}

type AppointmentProfilesReadResponse struct {
	AppointmentProfile *shared.AppointmentProfile
	ContentType        string
	StatusCode         int64
}
