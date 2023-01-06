package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActivateSubscriptionRequest struct {
	PathParams ActivateSubscriptionPathParams
	Request    *shared.ActivateSubscriptionRequest `request:"mediaType=application/json"`
}

type ActivateSubscriptionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
