package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ReminderProfilesPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ReminderProfilesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ReminderProfilesPartialUpdateRequest struct {
	PathParams  ReminderProfilesPartialUpdatePathParams
	QueryParams ReminderProfilesPartialUpdateQueryParams
	Security    ReminderProfilesPartialUpdateSecurity
}

type ReminderProfilesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
