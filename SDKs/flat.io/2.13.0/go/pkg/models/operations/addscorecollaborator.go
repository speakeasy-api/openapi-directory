package operations

import (
	"openapi/pkg/models/shared"
)

type AddScoreCollaboratorPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type AddScoreCollaboratorSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddScoreCollaboratorRequest struct {
	PathParams AddScoreCollaboratorPathParams
	Request    shared.ResourceCollaboratorCreation `request:"mediaType=application/json"`
	Security   AddScoreCollaboratorSecurity
}

type AddScoreCollaboratorResponse struct {
	ContentType          string
	FlatErrorResponse    *shared.FlatErrorResponse
	ResourceCollaborator *shared.ResourceCollaborator
	StatusCode           int64
}
