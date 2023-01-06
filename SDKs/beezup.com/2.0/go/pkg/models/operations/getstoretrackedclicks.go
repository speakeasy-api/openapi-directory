package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreTrackedClicksPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreTrackedClicksQueryParams struct {
	Count *int64 `queryParam:"style=form,explode=true,name=count"`
}

type GetStoreTrackedClicksRequest struct {
	PathParams  GetStoreTrackedClicksPathParams
	QueryParams GetStoreTrackedClicksQueryParams
}

type GetStoreTrackedClicksResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	TrackedClicks                    *shared.TrackedClicks
}
