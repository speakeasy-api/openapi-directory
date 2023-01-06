package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ReminderProfilesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ReminderProfilesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ReminderProfilesReadRequest struct {
	PathParams  ReminderProfilesReadPathParams
	QueryParams ReminderProfilesReadQueryParams
	Security    ReminderProfilesReadSecurity
}

type ReminderProfilesReadResponse struct {
	ContentType     string
	ReminderProfile *shared.ReminderProfile
	StatusCode      int64
}
