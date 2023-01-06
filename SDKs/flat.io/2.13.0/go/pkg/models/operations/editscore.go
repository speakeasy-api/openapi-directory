package operations

import (
	"openapi/pkg/models/shared"
)

type EditScorePathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type EditScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type EditScoreRequest struct {
	PathParams EditScorePathParams
	Request    *shared.ScoreModification `request:"mediaType=application/json"`
	Security   EditScoreSecurity
}

type EditScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      *shared.ScoreDetails
	StatusCode        int64
}
