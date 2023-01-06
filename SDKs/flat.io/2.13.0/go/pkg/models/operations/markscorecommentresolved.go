package operations

import (
	"openapi/pkg/models/shared"
)

type MarkScoreCommentResolvedPathParams struct {
	Comment string `pathParam:"style=simple,explode=false,name=comment"`
	Score   string `pathParam:"style=simple,explode=false,name=score"`
}

type MarkScoreCommentResolvedQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type MarkScoreCommentResolvedSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type MarkScoreCommentResolvedRequest struct {
	PathParams  MarkScoreCommentResolvedPathParams
	QueryParams MarkScoreCommentResolvedQueryParams
	Security    MarkScoreCommentResolvedSecurity
}

type MarkScoreCommentResolvedResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
