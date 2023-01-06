package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetProductsReportPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetProductsReportRequest struct {
	PathParams ImportationGetProductsReportPathParams
	Request    shared.GetImportationProductsReportRequest `request:"mediaType=application/json"`
}

type ImportationGetProductsReportResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetImportationProductsReportResponse *interface{}
}
