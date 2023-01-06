package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreReportByProductPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreReportByProductRequest struct {
	PathParams GetStoreReportByProductPathParams
	Request    shared.ReportByProductRequest `request:"mediaType=application/json"`
}

type GetStoreReportByProductResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportByProductResponse          *shared.ReportByProductResponse
}
