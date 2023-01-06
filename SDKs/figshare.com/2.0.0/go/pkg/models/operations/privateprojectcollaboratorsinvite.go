package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectCollaboratorsInvitePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectCollaboratorsInviteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectCollaboratorsInviteRequest struct {
	PathParams PrivateProjectCollaboratorsInvitePathParams
	Request    shared.ProjectCollaboratorInvite `request:"mediaType=application/json"`
	Security   PrivateProjectCollaboratorsInviteSecurity
}

type PrivateProjectCollaboratorsInviteResponse struct {
	ContentType     string
	ErrorMessage    *shared.ErrorMessage
	ResponseMessage *shared.ResponseMessage
	StatusCode      int64
}
