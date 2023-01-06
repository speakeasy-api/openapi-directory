package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScorePathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type DeleteScoreQueryParams struct {
	Now *bool `queryParam:"style=form,explode=true,name=now"`
}

type DeleteScoreSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteScoreRequest struct {
	PathParams  DeleteScorePathParams
	QueryParams DeleteScoreQueryParams
	Security    DeleteScoreSecurity
}

type DeleteScoreResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
