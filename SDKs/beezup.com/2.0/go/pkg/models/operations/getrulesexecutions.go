package operations

import (
	"openapi/pkg/models/shared"
)

type GetRulesExecutionsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetRulesExecutionsQueryParams struct {
	PageNumber int64 `queryParam:"style=form,explode=true,name=pageNumber"`
	PageSize   int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRulesExecutionsRequest struct {
	PathParams  GetRulesExecutionsPathParams
	QueryParams GetRulesExecutionsQueryParams
}

type GetRulesExecutionsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	RuleExecutionReportings          *shared.RuleExecutionReportings
}
