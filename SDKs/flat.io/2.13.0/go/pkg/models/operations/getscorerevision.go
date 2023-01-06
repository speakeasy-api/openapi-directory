package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreRevisionPathParams struct {
	Revision string `pathParam:"style=simple,explode=false,name=revision"`
	Score    string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreRevisionQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreRevisionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreRevisionRequest struct {
	PathParams  GetScoreRevisionPathParams
	QueryParams GetScoreRevisionQueryParams
	Security    GetScoreRevisionSecurity
}

type GetScoreRevisionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreRevision     *shared.ScoreRevision
	StatusCode        int64
}
