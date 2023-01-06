package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionInOrgPathParams struct {
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsListForTeamDiscussionInOrgQueryParams struct {
	Content *shared.DiscussionNumberEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                       `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionInOrgRequest struct {
	PathParams  ReactionsListForTeamDiscussionInOrgPathParams
	QueryParams ReactionsListForTeamDiscussionInOrgQueryParams
}

type ReactionsListForTeamDiscussionInOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
