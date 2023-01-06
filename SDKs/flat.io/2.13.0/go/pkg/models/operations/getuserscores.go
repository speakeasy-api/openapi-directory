package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserScoresPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type GetUserScoresQueryParams struct {
	Parent *string `queryParam:"style=form,explode=true,name=parent"`
}

type GetUserScoresSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUserScoresRequest struct {
	PathParams  GetUserScoresPathParams
	QueryParams GetUserScoresQueryParams
	Security    GetUserScoresSecurity
}

type GetUserScoresResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      []shared.ScoreDetails
	StatusCode        int64
}
