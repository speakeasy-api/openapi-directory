package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateGroupEmbargoOptionsDetailsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type PrivateGroupEmbargoOptionsDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateGroupEmbargoOptionsDetailsRequest struct {
	PathParams PrivateGroupEmbargoOptionsDetailsPathParams
	Security   PrivateGroupEmbargoOptionsDetailsSecurity
}

type PrivateGroupEmbargoOptionsDetailsResponse struct {
	ContentType         string
	ErrorMessage        *shared.ErrorMessage
	GroupEmbargoOptions []shared.GroupEmbargoOptions
	StatusCode          int64
}
