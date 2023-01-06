package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreTrackingStatusPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreTrackingStatusRequest struct {
	PathParams GetStoreTrackingStatusPathParams
}

type GetStoreTrackingStatusResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	StoreTrackingStatus              *shared.StoreTrackingStatus
}
