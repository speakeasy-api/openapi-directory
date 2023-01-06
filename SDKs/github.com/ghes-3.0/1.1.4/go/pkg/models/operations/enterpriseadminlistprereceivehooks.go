package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListPreReceiveHooksQueryParams struct {
	Direction *shared.DirectionEnum  `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.DirectionEnum2 `queryParam:"style=form,explode=true,name=sort"`
}

type EnterpriseAdminListPreReceiveHooksRequest struct {
	QueryParams EnterpriseAdminListPreReceiveHooksQueryParams
}

type EnterpriseAdminListPreReceiveHooksResponse struct {
	ContentType     string
	StatusCode      int64
	PreReceiveHooks []shared.PreReceiveHook
}
