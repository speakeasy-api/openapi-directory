package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ProjectsListForOrgQueryParams struct {
	Page    *int64           `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64           `queryParam:"style=form,explode=true,name=per_page"`
	State   *shared.OrgEnum1 `queryParam:"style=form,explode=true,name=state"`
}

type ProjectsListForOrgRequest struct {
	PathParams  ProjectsListForOrgPathParams
	QueryParams ProjectsListForOrgQueryParams
}

type ProjectsListForOrgResponse struct {
	ContentType           string
	Headers               map[string][]string
	StatusCode            int64
	Projects              []shared.Project
	ValidationErrorSimple *shared.ValidationErrorSimple
}
