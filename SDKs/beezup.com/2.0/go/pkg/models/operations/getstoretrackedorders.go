package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreTrackedOrdersPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreTrackedOrdersQueryParams struct {
	Count *int64 `queryParam:"style=form,explode=true,name=count"`
}

type GetStoreTrackedOrdersRequest struct {
	PathParams  GetStoreTrackedOrdersPathParams
	QueryParams GetStoreTrackedOrdersQueryParams
}

type GetStoreTrackedOrdersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	TrackedOrders                    *shared.TrackedOrders
}
