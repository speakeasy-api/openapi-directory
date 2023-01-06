package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersUseridPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUsersUseridSecurity struct {
	ClientAccessToken shared.SchemeClientAccessToken `security:"scheme,type=oauth2"`
}

type DeleteUsersUseridRequest struct {
	PathParams DeleteUsersUseridPathParams
	Security   DeleteUsersUseridSecurity
}

type DeleteUsersUseridResponse struct {
	ContentType string
	StatusCode  int64
}
