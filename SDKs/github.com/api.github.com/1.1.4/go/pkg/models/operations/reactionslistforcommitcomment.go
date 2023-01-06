package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForCommitCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsListForCommitCommentQueryParams struct {
	Content *shared.CommentIDEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForCommitComment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsListForCommitCommentRequest struct {
	PathParams  ReactionsListForCommitCommentPathParams
	QueryParams ReactionsListForCommitCommentQueryParams
}

type ReactionsListForCommitCommentResponse struct {
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
	BasicError                                            *shared.BasicError
	Reactions                                             []shared.Reaction
	ReactionsListForCommitComment415ApplicationJSONObject *ReactionsListForCommitComment415ApplicationJSON
}
