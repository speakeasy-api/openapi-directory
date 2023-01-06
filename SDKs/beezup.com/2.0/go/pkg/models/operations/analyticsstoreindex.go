package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsStoreIndexPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AnalyticsStoreIndexRequest struct {
	PathParams AnalyticsStoreIndexPathParams
}

type AnalyticsStoreIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	AnalyticsStoreIndex              *shared.AnalyticsStoreIndex
}
