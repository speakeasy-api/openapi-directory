package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthenticatedUserQueryParams struct {
	OnlyID *bool `queryParam:"style=form,explode=true,name=onlyId"`
}

type GetAuthenticatedUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAuthenticatedUserRequest struct {
	QueryParams GetAuthenticatedUserQueryParams
	Security    GetAuthenticatedUserSecurity
}

type GetAuthenticatedUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserDetails       *shared.UserDetails
}
