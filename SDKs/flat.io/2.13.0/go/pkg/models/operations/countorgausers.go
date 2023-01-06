package operations

import (
	"openapi/pkg/models/shared"
)

type CountOrgaUsersQueryParams struct {
	Group           []string          `queryParam:"style=form,explode=true,name=group"`
	NoActiveLicense *bool             `queryParam:"style=form,explode=true,name=noActiveLicense"`
	Q               *string           `queryParam:"style=form,explode=true,name=q"`
	Role            []shared.RoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type CountOrgaUsersSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CountOrgaUsersRequest struct {
	QueryParams CountOrgaUsersQueryParams
	Security    CountOrgaUsersSecurity
}

type CountOrgaUsersResponse struct {
	ContentType                             string
	FlatErrorResponse                       *shared.FlatErrorResponse
	StatusCode                              int64
	CountOrgaUsers200ApplicationJSONInteger *int64
}
