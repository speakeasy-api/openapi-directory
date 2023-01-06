package operations

import (
	"openapi/pkg/models/shared"
)

type UntrashScorePathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type UntrashScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UntrashScoreRequest struct {
	PathParams UntrashScorePathParams
	Security   UntrashScoreSecurity
}

type UntrashScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
