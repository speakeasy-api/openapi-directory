package operations

import (
	"openapi/pkg/models/shared"
)

type CareTeamMembersListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type CareTeamMembersListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CareTeamMembersList200ApplicationJSON
// Paginated Result
type CareTeamMembersList200ApplicationJSON struct {
	Data     []shared.CareTeamMember `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type CareTeamMembersListRequest struct {
	QueryParams CareTeamMembersListQueryParams
	Security    CareTeamMembersListSecurity
}

type CareTeamMembersListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CareTeamMembersList200ApplicationJSONObject *CareTeamMembersList200ApplicationJSON
}
