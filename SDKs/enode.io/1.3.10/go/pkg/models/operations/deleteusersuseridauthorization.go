package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersUseridAuthorizationPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUsersUseridAuthorizationSecurity struct {
	ClientAccessToken shared.SchemeClientAccessToken `security:"scheme,type=oauth2"`
}

type DeleteUsersUseridAuthorizationRequest struct {
	PathParams DeleteUsersUseridAuthorizationPathParams
	Security   DeleteUsersUseridAuthorizationSecurity
}

type DeleteUsersUseridAuthorizationResponse struct {
	ContentType string
	StatusCode  int64
}
