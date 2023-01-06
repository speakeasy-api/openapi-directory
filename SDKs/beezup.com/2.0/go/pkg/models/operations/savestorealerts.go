package operations

import (
	"openapi/pkg/models/shared"
)

type SaveStoreAlertsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type SaveStoreAlertsRequest struct {
	PathParams SaveStoreAlertsPathParams
	Request    map[string]shared.SaveStoreAlertRequest `request:"mediaType=application/json"`
}

type SaveStoreAlertsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
