package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListPreReceiveHooksForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type EnterpriseAdminListPreReceiveHooksForOrgQueryParams struct {
	Direction *shared.DirectionEnum  `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.DirectionEnum2 `queryParam:"style=form,explode=true,name=sort"`
}

type EnterpriseAdminListPreReceiveHooksForOrgRequest struct {
	PathParams  EnterpriseAdminListPreReceiveHooksForOrgPathParams
	QueryParams EnterpriseAdminListPreReceiveHooksForOrgQueryParams
}

type EnterpriseAdminListPreReceiveHooksForOrgResponse struct {
	ContentType        string
	StatusCode         int64
	OrgPreReceiveHooks []shared.OrgPreReceiveHook
}
