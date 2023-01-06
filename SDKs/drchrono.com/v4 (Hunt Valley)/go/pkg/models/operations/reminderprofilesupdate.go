package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ReminderProfilesUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ReminderProfilesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ReminderProfilesUpdateRequest struct {
	PathParams  ReminderProfilesUpdatePathParams
	QueryParams ReminderProfilesUpdateQueryParams
	Security    ReminderProfilesUpdateSecurity
}

type ReminderProfilesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
