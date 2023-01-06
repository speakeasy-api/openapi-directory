package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreateSubscriptionRequest struct {
	PathParams CreateSubscriptionPathParams
	Request    shared.CreateSubscriptionRequest `request:"mediaType=application/json"`
}

type CreateSubscriptionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
