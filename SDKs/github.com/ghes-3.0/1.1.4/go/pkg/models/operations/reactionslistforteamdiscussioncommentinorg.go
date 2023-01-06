package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsListForTeamDiscussionCommentInOrgQueryParams struct {
	Content *shared.CommentNumberEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                    `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionCommentInOrgRequest struct {
	PathParams  ReactionsListForTeamDiscussionCommentInOrgPathParams
	QueryParams ReactionsListForTeamDiscussionCommentInOrgQueryParams
}

type ReactionsListForTeamDiscussionCommentInOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
