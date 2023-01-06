package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreAlertsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreAlertsHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetStoreAlertsRequest struct {
	PathParams GetStoreAlertsPathParams
	Headers    GetStoreAlertsHeaders
}

type GetStoreAlertsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	StoreAlerts                      *shared.StoreAlerts
}
