package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreRevisionsPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreRevisionsQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreRevisionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreRevisionsRequest struct {
	PathParams  GetScoreRevisionsPathParams
	QueryParams GetScoreRevisionsQueryParams
	Security    GetScoreRevisionsSecurity
}

type GetScoreRevisionsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreRevisions    []shared.ScoreRevision
	StatusCode        int64
}
