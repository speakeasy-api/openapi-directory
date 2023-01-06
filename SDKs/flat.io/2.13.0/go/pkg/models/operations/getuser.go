package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type GetUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Security   GetUserSecurity
}

type GetUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserPublic        *shared.UserPublic
}
