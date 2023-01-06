package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportFilterPathParams struct {
	ReportFilterID string `pathParam:"style=simple,explode=false,name=reportFilterId"`
	StoreID        string `pathParam:"style=simple,explode=false,name=storeId"`
}

type DeleteReportFilterRequest struct {
	PathParams DeleteReportFilterPathParams
}

type DeleteReportFilterResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
