package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportFilterPathParams struct {
	ReportFilterID string `pathParam:"style=simple,explode=false,name=reportFilterId"`
	StoreID        string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetReportFilterRequest struct {
	PathParams GetReportFilterPathParams
}

type GetReportFilterResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportFilter                     *shared.ReportFilter
}
