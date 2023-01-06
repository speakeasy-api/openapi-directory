package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupScoresPathParams struct {
	Group string `pathParam:"style=simple,explode=false,name=group"`
}

type GetGroupScoresQueryParams struct {
	Parent *string `queryParam:"style=form,explode=true,name=parent"`
}

type GetGroupScoresSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetGroupScoresRequest struct {
	PathParams  GetGroupScoresPathParams
	QueryParams GetGroupScoresQueryParams
	Security    GetGroupScoresSecurity
}

type GetGroupScoresResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      []shared.ScoreDetails
	StatusCode        int64
}
