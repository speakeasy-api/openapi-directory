package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListMembersPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListMembersQueryParams struct {
	Filter  *shared.OrgEnum2 `queryParam:"style=form,explode=true,name=filter"`
	Page    *int64           `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64           `queryParam:"style=form,explode=true,name=per_page"`
	Role    *shared.OrgEnum3 `queryParam:"style=form,explode=true,name=role"`
}

type OrgsListMembersRequest struct {
	PathParams  OrgsListMembersPathParams
	QueryParams OrgsListMembersQueryParams
}

type OrgsListMembersResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	SimpleUsers     []shared.SimpleUser
	ValidationError *shared.ValidationError
}
