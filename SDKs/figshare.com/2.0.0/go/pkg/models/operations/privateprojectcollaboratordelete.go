package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectCollaboratorDeletePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	UserID    int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type PrivateProjectCollaboratorDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectCollaboratorDeleteRequest struct {
	PathParams PrivateProjectCollaboratorDeletePathParams
	Security   PrivateProjectCollaboratorDeleteSecurity
}

type PrivateProjectCollaboratorDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
