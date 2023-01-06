package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveScoreCollaboratorPathParams struct {
	Collaborator string `pathParam:"style=simple,explode=false,name=collaborator"`
	Score        string `pathParam:"style=simple,explode=false,name=score"`
}

type RemoveScoreCollaboratorSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type RemoveScoreCollaboratorRequest struct {
	PathParams RemoveScoreCollaboratorPathParams
	Security   RemoveScoreCollaboratorSecurity
}

type RemoveScoreCollaboratorResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
