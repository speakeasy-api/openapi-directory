package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupDetailsPathParams struct {
	Group string `pathParam:"style=simple,explode=false,name=group"`
}

type GetGroupDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetGroupDetailsRequest struct {
	PathParams GetGroupDetailsPathParams
	Security   GetGroupDetailsSecurity
}

type GetGroupDetailsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	GroupDetails      *shared.GroupDetails
	StatusCode        int64
}
