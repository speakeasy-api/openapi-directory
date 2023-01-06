package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsListForTeamDiscussionQueryParams struct {
	Content *shared.DiscussionNumberEnum1 `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                        `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type ReactionsListForTeamDiscussionRequest struct {
	PathParams  ReactionsListForTeamDiscussionPathParams
	QueryParams ReactionsListForTeamDiscussionQueryParams
	Headers     ReactionsListForTeamDiscussionHeaders
}

type ReactionsListForTeamDiscussionResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
