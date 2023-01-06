package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationStartManualUpdatePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationStartManualUpdateRequest struct {
	PathParams ImportationStartManualUpdatePathParams
	Request    shared.StartManualImportRequest `request:"mediaType=application/json"`
}

type ImportationStartManualUpdateResponse struct {
	BeezUPCommonErrorResponseMessage             *shared.BeezUpCommonErrorResponseMessage
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	ImportAlreadyInProgressResponse              *shared.ImportAlreadyInProgressResponse
	LinksImportationGetImportationMonitoringLink map[string]interface{}
}
