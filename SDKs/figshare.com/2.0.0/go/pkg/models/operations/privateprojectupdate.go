package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectUpdatePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectUpdateRequest struct {
	PathParams PrivateProjectUpdatePathParams
	Request    shared.ProjectUpdate `request:"mediaType=application/json"`
	Security   PrivateProjectUpdateSecurity
}

type PrivateProjectUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
