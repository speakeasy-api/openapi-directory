package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetImportationMonitoringPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetImportationMonitoringRequest struct {
	PathParams ImportationGetImportationMonitoringPathParams
}

type ImportationGetImportationMonitoringResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportationMonitoring            *shared.ImportationMonitoring
}
