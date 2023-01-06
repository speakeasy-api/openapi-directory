package operations

import (
	"openapi/pkg/models/shared"
)

type UserGroupsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UserGroupsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type UserGroupsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type UserGroupsReadRequest struct {
	PathParams  UserGroupsReadPathParams
	QueryParams UserGroupsReadQueryParams
	Security    UserGroupsReadSecurity
}

type UserGroupsReadResponse struct {
	ContentType       string
	StatusCode        int64
	UserProfilesGroup *shared.UserProfilesGroup
}
