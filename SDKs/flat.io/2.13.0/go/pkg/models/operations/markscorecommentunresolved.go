package operations

import (
	"openapi/pkg/models/shared"
)

type MarkScoreCommentUnresolvedPathParams struct {
	Comment string `pathParam:"style=simple,explode=false,name=comment"`
	Score   string `pathParam:"style=simple,explode=false,name=score"`
}

type MarkScoreCommentUnresolvedQueryParams struct {
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
}

type MarkScoreCommentUnresolvedSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type MarkScoreCommentUnresolvedRequest struct {
	PathParams  MarkScoreCommentUnresolvedPathParams
	QueryParams MarkScoreCommentUnresolvedQueryParams
	Security    MarkScoreCommentUnresolvedSecurity
}

type MarkScoreCommentUnresolvedResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
