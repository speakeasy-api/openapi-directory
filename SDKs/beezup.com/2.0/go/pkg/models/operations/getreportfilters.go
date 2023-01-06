package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportFiltersPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetReportFiltersRequest struct {
	PathParams GetReportFiltersPathParams
}

type GetReportFiltersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportFilterList                 *shared.ReportFilterList
}
