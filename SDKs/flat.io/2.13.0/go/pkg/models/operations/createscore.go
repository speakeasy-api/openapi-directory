package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateScoreRequest struct {
	Request  shared.ScoreCreation `request:"mediaType=application/json"`
	Security CreateScoreSecurity
}

type CreateScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      *shared.ScoreDetails
	StatusCode        int64
}
