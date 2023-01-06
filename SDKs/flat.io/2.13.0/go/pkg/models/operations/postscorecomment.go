package operations

import (
	"openapi/pkg/models/shared"
)

type PostScoreCommentPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type PostScoreCommentQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type PostScoreCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostScoreCommentRequest struct {
	PathParams  PostScoreCommentPathParams
	QueryParams PostScoreCommentQueryParams
	Request     shared.ScoreCommentCreation `request:"mediaType=application/json"`
	Security    PostScoreCommentSecurity
}

type PostScoreCommentResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreComment      *shared.ScoreComment
	StatusCode        int64
}
