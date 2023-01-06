package operations

import (
	"openapi/pkg/models/shared"
)

type UserGroupsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type UserGroupsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// UserGroupsList200ApplicationJSON
// Paginated Result
type UserGroupsList200ApplicationJSON struct {
	Data     []shared.UserProfilesGroup `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type UserGroupsListRequest struct {
	QueryParams UserGroupsListQueryParams
	Security    UserGroupsListSecurity
}

type UserGroupsListResponse struct {
	ContentType                            string
	StatusCode                             int64
	UserGroupsList200ApplicationJSONObject *UserGroupsList200ApplicationJSON
}
