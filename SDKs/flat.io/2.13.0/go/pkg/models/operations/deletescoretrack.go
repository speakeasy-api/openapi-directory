package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScoreTrackPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
	Track string `pathParam:"style=simple,explode=false,name=track"`
}

type DeleteScoreTrackSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteScoreTrackRequest struct {
	PathParams DeleteScoreTrackPathParams
	Security   DeleteScoreTrackSecurity
}

type DeleteScoreTrackResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
