package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentProfilesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppointmentProfilesPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type AppointmentProfilesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AppointmentProfilesPartialUpdateRequest struct {
	PathParams  AppointmentProfilesPartialUpdatePathParams
	QueryParams AppointmentProfilesPartialUpdateQueryParams
	Security    AppointmentProfilesPartialUpdateSecurity
}

type AppointmentProfilesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
