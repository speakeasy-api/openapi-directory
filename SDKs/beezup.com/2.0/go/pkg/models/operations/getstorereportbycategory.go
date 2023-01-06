package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreReportByCategoryPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreReportByCategoryRequest struct {
	PathParams GetStoreReportByCategoryPathParams
	Request    shared.ReportByCategoryRequest `request:"mediaType=application/json"`
}

type GetStoreReportByCategoryResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportByCategoryResponse         *shared.ReportByCategoryResponse
}
