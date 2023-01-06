package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreCollaboratorPathParams struct {
	Collaborator string `pathParam:"style=simple,explode=false,name=collaborator"`
	Score        string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreCollaboratorQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreCollaboratorSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreCollaboratorRequest struct {
	PathParams  GetScoreCollaboratorPathParams
	QueryParams GetScoreCollaboratorQueryParams
	Security    GetScoreCollaboratorSecurity
}

type GetScoreCollaboratorResponse struct {
	ContentType          string
	FlatErrorResponse    *shared.FlatErrorResponse
	ResourceCollaborator *shared.ResourceCollaborator
	StatusCode           int64
}
