package operations

import (
	"openapi/pkg/models/shared"
)

type DeactivateSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeactivateSubscriptionRequest struct {
	PathParams DeactivateSubscriptionPathParams
}

type DeactivateSubscriptionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
