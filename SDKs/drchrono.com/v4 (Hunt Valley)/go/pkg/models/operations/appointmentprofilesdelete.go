package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentProfilesDeleteQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type AppointmentProfilesDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentProfilesDeleteRequest struct {
	PathParams  AppointmentProfilesDeletePathParams
	QueryParams AppointmentProfilesDeleteQueryParams
	Security    AppointmentProfilesDeleteSecurity
}

type AppointmentProfilesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
