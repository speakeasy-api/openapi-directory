package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScoreTrackPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
	Track string `pathParam:"style=simple,explode=false,name=track"`
}

type UpdateScoreTrackSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateScoreTrackRequest struct {
	PathParams UpdateScoreTrackPathParams
	Request    shared.ScoreTrackUpdate `request:"mediaType=application/json"`
	Security   UpdateScoreTrackSecurity
}

type UpdateScoreTrackResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreTrack        *shared.ScoreTrack
	StatusCode        int64
}
