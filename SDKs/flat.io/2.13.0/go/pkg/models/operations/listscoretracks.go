package operations

import (
	"openapi/pkg/models/shared"
)

type ListScoreTracksPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type ListScoreTracksQueryParams struct {
	Assignment    *string `queryParam:"style=form,explode=true,name=assignment"`
	ListAutoTrack *bool   `queryParam:"style=form,explode=true,name=listAutoTrack"`
	SharingKey    *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type ListScoreTracksSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListScoreTracksRequest struct {
	PathParams  ListScoreTracksPathParams
	QueryParams ListScoreTracksQueryParams
	Security    ListScoreTracksSecurity
}

type ListScoreTracksResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreTracks       []shared.ScoreTrack
	StatusCode        int64
}
