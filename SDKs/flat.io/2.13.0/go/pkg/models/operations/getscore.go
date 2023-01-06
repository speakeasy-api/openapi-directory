package operations

import (
	"openapi/pkg/models/shared"
)

type GetScorePathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreRequest struct {
	PathParams  GetScorePathParams
	QueryParams GetScoreQueryParams
	Security    GetScoreSecurity
}

type GetScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      *shared.ScoreDetails
	StatusCode        int64
}
