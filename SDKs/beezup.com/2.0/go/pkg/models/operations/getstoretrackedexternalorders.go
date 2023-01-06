package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreTrackedExternalOrdersPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreTrackedExternalOrdersQueryParams struct {
	Count *int64 `queryParam:"style=form,explode=true,name=count"`
}

type GetStoreTrackedExternalOrdersRequest struct {
	PathParams  GetStoreTrackedExternalOrdersPathParams
	QueryParams GetStoreTrackedExternalOrdersQueryParams
}

type GetStoreTrackedExternalOrdersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	TrackedExternalOrders            *shared.TrackedExternalOrders
}
