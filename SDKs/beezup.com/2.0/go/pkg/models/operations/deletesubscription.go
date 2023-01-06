package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSubscriptionRequest struct {
	PathParams DeleteSubscriptionPathParams
}

type DeleteSubscriptionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
