package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ReminderProfilesDeleteQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ReminderProfilesDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ReminderProfilesDeleteRequest struct {
	PathParams  ReminderProfilesDeletePathParams
	QueryParams ReminderProfilesDeleteQueryParams
	Security    ReminderProfilesDeleteSecurity
}

type ReminderProfilesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
