package operations

import (
	"openapi/pkg/models/shared"
)

type SaveReportFilterPathParams struct {
	ReportFilterID string `pathParam:"style=simple,explode=false,name=reportFilterId"`
	StoreID        string `pathParam:"style=simple,explode=false,name=storeId"`
}

type SaveReportFilterRequest struct {
	PathParams SaveReportFilterPathParams
	Request    shared.SaveReportFilterRequest `request:"mediaType=application/json"`
}

type SaveReportFilterResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
