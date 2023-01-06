package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroupUsersPathParams struct {
	Group string `pathParam:"style=simple,explode=false,name=group"`
}

type ListGroupUsersSourceEnum string

const (
	ListGroupUsersSourceEnumGoogleClassroom ListGroupUsersSourceEnum = "googleClassroom"
	ListGroupUsersSourceEnumMicrosoftGraph  ListGroupUsersSourceEnum = "microsoftGraph"
	ListGroupUsersSourceEnumClever          ListGroupUsersSourceEnum = "clever"
)

type ListGroupUsersQueryParams struct {
	Source *ListGroupUsersSourceEnum `queryParam:"style=form,explode=true,name=source"`
}

type ListGroupUsersSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListGroupUsersRequest struct {
	PathParams  ListGroupUsersPathParams
	QueryParams ListGroupUsersQueryParams
	Security    ListGroupUsersSecurity
}

type ListGroupUsersResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserPublics       []shared.UserPublic
}
