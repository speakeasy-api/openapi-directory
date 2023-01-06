package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectCollaboratorsListPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectCollaboratorsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectCollaboratorsListRequest struct {
	PathParams PrivateProjectCollaboratorsListPathParams
	Security   PrivateProjectCollaboratorsListSecurity
}

type PrivateProjectCollaboratorsListResponse struct {
	ContentType          string
	ErrorMessage         *shared.ErrorMessage
	ProjectCollaborators []shared.ProjectCollaborator
	StatusCode           int64
}
