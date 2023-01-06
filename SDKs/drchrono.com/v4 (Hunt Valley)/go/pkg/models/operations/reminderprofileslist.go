package operations

import (
	"openapi/pkg/models/shared"
)

type ReminderProfilesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ReminderProfilesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ReminderProfilesList200ApplicationJSON
// Paginated Result
type ReminderProfilesList200ApplicationJSON struct {
	Data     []shared.ReminderProfile `json:"data,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
}

type ReminderProfilesListRequest struct {
	QueryParams ReminderProfilesListQueryParams
	Security    ReminderProfilesListSecurity
}

type ReminderProfilesListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ReminderProfilesList200ApplicationJSONObject *ReminderProfilesList200ApplicationJSON
}
