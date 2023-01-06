package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ReminderProfilesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ReminderProfilesCreateRequest struct {
	QueryParams ReminderProfilesCreateQueryParams
	Security    ReminderProfilesCreateSecurity
}

type ReminderProfilesCreateResponse struct {
	ContentType     string
	ReminderProfile *shared.ReminderProfile
	StatusCode      int64
}
