package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type IssuesListForOrgQueryParams struct {
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *shared.OrgEnum       `queryParam:"style=form,explode=true,name=filter"`
	Labels    *string               `queryParam:"style=form,explode=true,name=labels"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
	Since     *string               `queryParam:"style=form,explode=true,name=since"`
	Sort      *shared.LabelsEnum    `queryParam:"style=form,explode=true,name=sort"`
	State     *shared.OrgEnum1      `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListForOrgRequest struct {
	PathParams  IssuesListForOrgPathParams
	QueryParams IssuesListForOrgQueryParams
}

type IssuesListForOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Issues      []shared.Issue
}
