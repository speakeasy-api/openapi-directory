package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ReposListForOrgQueryParams struct {
	Direction *shared.OrgEnum6 `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64           `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.OrgEnum5 `queryParam:"style=form,explode=true,name=sort"`
	Type      *shared.OrgEnum4 `queryParam:"style=form,explode=true,name=type"`
}

type ReposListForOrgRequest struct {
	PathParams  ReposListForOrgPathParams
	QueryParams ReposListForOrgQueryParams
}

type ReposListForOrgResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	MinimalRepositories []shared.MinimalRepository
}
