package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationConfigureRemainingCatalogColumnsPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationConfigureRemainingCatalogColumnsRequest struct {
	PathParams ImportationConfigureRemainingCatalogColumnsPathParams
}

type ImportationConfigureRemainingCatalogColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
