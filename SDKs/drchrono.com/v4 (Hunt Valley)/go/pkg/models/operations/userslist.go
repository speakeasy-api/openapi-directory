package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type UsersListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// UsersList200ApplicationJSON
// Paginated Result
type UsersList200ApplicationJSON struct {
	Data     []shared.UserProfile `json:"data,omitempty"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
}

type UsersListRequest struct {
	QueryParams UsersListQueryParams
	Security    UsersListSecurity
}

type UsersListResponse struct {
	ContentType                       string
	StatusCode                        int64
	UsersList200ApplicationJSONObject *UsersList200ApplicationJSON
}
