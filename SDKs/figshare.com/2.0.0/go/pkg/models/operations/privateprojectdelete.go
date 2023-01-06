package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectDeletePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectDeleteRequest struct {
	PathParams PrivateProjectDeletePathParams
	Security   PrivateProjectDeleteSecurity
}

type PrivateProjectDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
