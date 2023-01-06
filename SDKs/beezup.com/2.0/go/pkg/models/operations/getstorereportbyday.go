package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreReportByDayPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreReportByDayRequest struct {
	PathParams GetStoreReportByDayPathParams
	Request    shared.ReportByDayRequest `request:"mediaType=application/json"`
}

type GetStoreReportByDayResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportByDayResponse              *shared.ReportByDayResponse
}
