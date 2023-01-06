package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetDetectedCatalogColumnsPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetDetectedCatalogColumnsRequest struct {
	PathParams ImportationGetDetectedCatalogColumnsPathParams
}

type ImportationGetDetectedCatalogColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	DetectedCatalogColumnList        *shared.DetectedCatalogColumnList
}
