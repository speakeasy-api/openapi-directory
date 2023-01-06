package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClassUserPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
	User  string `pathParam:"style=simple,explode=false,name=user"`
}

type DeleteClassUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteClassUserRequest struct {
	PathParams DeleteClassUserPathParams
	Security   DeleteClassUserSecurity
}

type DeleteClassUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
