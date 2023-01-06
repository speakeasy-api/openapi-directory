package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSubscriptionRequest struct {
	PathParams GetSubscriptionPathParams
}

type GetSubscriptionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	SubscriptionIndex                *shared.SubscriptionIndex
}
