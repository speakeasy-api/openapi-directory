package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreCollaboratorsPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreCollaboratorsQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreCollaboratorsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreCollaboratorsRequest struct {
	PathParams  GetScoreCollaboratorsPathParams
	QueryParams GetScoreCollaboratorsQueryParams
	Security    GetScoreCollaboratorsSecurity
}

type GetScoreCollaboratorsResponse struct {
	ContentType           string
	FlatErrorResponse     *shared.FlatErrorResponse
	ResourceCollaborators []shared.ResourceCollaborator
	StatusCode            int64
}
