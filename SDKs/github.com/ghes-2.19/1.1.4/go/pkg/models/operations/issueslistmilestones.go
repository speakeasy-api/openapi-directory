package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListMilestonesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListMilestonesQueryParams struct {
	Direction *shared.RepoEnum4 `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64            `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64            `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.RepoEnum3 `queryParam:"style=form,explode=true,name=sort"`
	State     *shared.RepoEnum2 `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListMilestonesRequest struct {
	PathParams  IssuesListMilestonesPathParams
	QueryParams IssuesListMilestonesQueryParams
}

type IssuesListMilestonesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Milestones  []shared.Milestone
}
