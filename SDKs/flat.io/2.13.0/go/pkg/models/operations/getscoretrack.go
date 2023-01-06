package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreTrackPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
	Track string `pathParam:"style=simple,explode=false,name=track"`
}

type GetScoreTrackQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type GetScoreTrackSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreTrackRequest struct {
	PathParams  GetScoreTrackPathParams
	QueryParams GetScoreTrackQueryParams
	Security    GetScoreTrackSecurity
}

type GetScoreTrackResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreTrack        *shared.ScoreTrack
	StatusCode        int64
}
