package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScoreCommentPathParams struct {
	Comment string `pathParam:"style=simple,explode=false,name=comment"`
	Score   string `pathParam:"style=simple,explode=false,name=score"`
}

type DeleteScoreCommentQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type DeleteScoreCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteScoreCommentRequest struct {
	PathParams  DeleteScoreCommentPathParams
	QueryParams DeleteScoreCommentQueryParams
	Security    DeleteScoreCommentSecurity
}

type DeleteScoreCommentResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
