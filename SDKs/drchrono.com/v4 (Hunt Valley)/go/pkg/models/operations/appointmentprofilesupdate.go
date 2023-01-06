package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentProfilesUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type AppointmentProfilesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentProfilesUpdateRequest struct {
	PathParams  AppointmentProfilesUpdatePathParams
	QueryParams AppointmentProfilesUpdateQueryParams
	Security    AppointmentProfilesUpdateSecurity
}

type AppointmentProfilesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
