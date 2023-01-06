package operations

import (
	"openapi/pkg/models/shared"
)

type ForkScorePathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type ForkScoreQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type ForkScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ForkScoreRequest struct {
	PathParams  ForkScorePathParams
	QueryParams ForkScoreQueryParams
	Request     shared.ScoreFork `request:"mediaType=application/json"`
	Security    ForkScoreSecurity
}

type ForkScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      *shared.ScoreDetails
	StatusCode        int64
}
