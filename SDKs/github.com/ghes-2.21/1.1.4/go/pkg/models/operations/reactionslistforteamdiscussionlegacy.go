package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionLegacyPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsListForTeamDiscussionLegacyQueryParams struct {
	Content *shared.DiscussionNumberEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                       `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionLegacyRequest struct {
	PathParams  ReactionsListForTeamDiscussionLegacyPathParams
	QueryParams ReactionsListForTeamDiscussionLegacyQueryParams
}

type ReactionsListForTeamDiscussionLegacyResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
