package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScoreCommentPathParams struct {
	Comment string `pathParam:"style=simple,explode=false,name=comment"`
	Score   string `pathParam:"style=simple,explode=false,name=score"`
}

type UpdateScoreCommentQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type UpdateScoreCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateScoreCommentRequest struct {
	PathParams  UpdateScoreCommentPathParams
	QueryParams UpdateScoreCommentQueryParams
	Request     shared.ScoreCommentUpdate `request:"mediaType=application/json"`
	Security    UpdateScoreCommentSecurity
}

type UpdateScoreCommentResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreComment      *shared.ScoreComment
	StatusCode        int64
}
