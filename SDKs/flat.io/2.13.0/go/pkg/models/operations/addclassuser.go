package operations

import (
	"openapi/pkg/models/shared"
)

type AddClassUserPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
	User  string `pathParam:"style=simple,explode=false,name=user"`
}

type AddClassUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddClassUserRequest struct {
	PathParams AddClassUserPathParams
	Security   AddClassUserSecurity
}

type AddClassUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
