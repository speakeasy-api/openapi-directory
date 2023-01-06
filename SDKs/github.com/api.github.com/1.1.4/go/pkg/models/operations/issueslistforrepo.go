package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListForRepoQueryParams struct {
	Assignee  *string               `queryParam:"style=form,explode=true,name=assignee"`
	Creator   *string               `queryParam:"style=form,explode=true,name=creator"`
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Labels    *string               `queryParam:"style=form,explode=true,name=labels"`
	Mentioned *string               `queryParam:"style=form,explode=true,name=mentioned"`
	Milestone *string               `queryParam:"style=form,explode=true,name=milestone"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
	Since     *string               `queryParam:"style=form,explode=true,name=since"`
	Sort      *shared.LabelsEnum    `queryParam:"style=form,explode=true,name=sort"`
	State     *shared.RepoEnum2     `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListForRepoRequest struct {
	PathParams  IssuesListForRepoPathParams
	QueryParams IssuesListForRepoQueryParams
}

type IssuesListForRepoResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	IssueSimples    []shared.IssueSimple
	ValidationError *shared.ValidationError
}
