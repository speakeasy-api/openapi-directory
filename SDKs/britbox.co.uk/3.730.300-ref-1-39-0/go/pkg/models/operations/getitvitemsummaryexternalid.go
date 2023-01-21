package operations

import (
	"openapi/pkg/models/shared"
)

type GetItvItemsummaryExternalIDPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=externalId"`
}

type GetItvItemsummaryExternalIDRequest struct {
	PathParams GetItvItemsummaryExternalIDPathParams
}

type GetItvItemsummaryExternalIDResponse struct {
	ContentType                                         string
	ServiceError                                        *shared.ServiceError
	StatusCode                                          int64
	GetItvItemsummaryExternalID302ApplicationJSONObject map[string]interface{}
}
