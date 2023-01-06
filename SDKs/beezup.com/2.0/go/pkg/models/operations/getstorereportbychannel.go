package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreReportByChannelPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreReportByChannelRequest struct {
	PathParams GetStoreReportByChannelPathParams
	Request    shared.ReportByChannelRequest `request:"mediaType=application/json"`
}

type GetStoreReportByChannelResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportByChannelResponse          *shared.ReportByChannelResponse
}
