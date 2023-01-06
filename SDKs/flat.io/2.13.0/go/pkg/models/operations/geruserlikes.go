package operations

import (
	"openapi/pkg/models/shared"
)

type GerUserLikesPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type GerUserLikesQueryParams struct {
	Ids *bool `queryParam:"style=form,explode=true,name=ids"`
}

type GerUserLikesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GerUserLikesRequest struct {
	PathParams  GerUserLikesPathParams
	QueryParams GerUserLikesQueryParams
	Security    GerUserLikesSecurity
}

type GerUserLikesResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreDetails      []shared.ScoreDetails
	StatusCode        int64
}
