package operations

import (
	"openapi/pkg/models/shared"
)

type AddScoreTrackPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type AddScoreTrackSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddScoreTrackRequest struct {
	PathParams AddScoreTrackPathParams
	Request    shared.ScoreTrackCreation `request:"mediaType=application/json"`
	Security   AddScoreTrackSecurity
}

type AddScoreTrackResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreTrack        *shared.ScoreTrack
	StatusCode        int64
}
