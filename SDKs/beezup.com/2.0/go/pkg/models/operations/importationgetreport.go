package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetReportPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetReportRequest struct {
	PathParams ImportationGetReportPathParams
}

type ImportationGetReportResponse struct {
	ContentType                  string
	StatusCode                   int64
	GetImportationReportResponse *shared.GetImportationReportResponse
}
