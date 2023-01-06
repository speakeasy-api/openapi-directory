package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectPublishPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectPublishSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectPublishRequest struct {
	PathParams PrivateProjectPublishPathParams
	Security   PrivateProjectPublishSecurity
}

type PrivateProjectPublishResponse struct {
	ContentType     string
	ErrorMessage    *shared.ErrorMessage
	ResponseMessage *shared.ResponseMessage
	StatusCode      int64
}
