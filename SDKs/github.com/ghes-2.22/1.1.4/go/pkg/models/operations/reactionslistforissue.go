package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForIssuePathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsListForIssueQueryParams struct {
	Content *shared.IssueNumberEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                  `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForIssue415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsListForIssueRequest struct {
	PathParams  ReactionsListForIssuePathParams
	QueryParams ReactionsListForIssueQueryParams
}

type ReactionsListForIssueResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	BasicError                                    *shared.BasicError
	Reactions                                     []shared.Reaction
	ReactionsListForIssue415ApplicationJSONObject *ReactionsListForIssue415ApplicationJSON
}
