package operations

import (
	"openapi/pkg/models/shared"
)

type SubscriptionsPostRequest struct {
	Request shared.AppPkgSubscription `request:"mediaType=application/json"`
}

type SubscriptionsPostResponse struct {
	AppPkgSubscriptionInfo *shared.AppPkgSubscriptionInfo
	ContentType            string
	ProblemDetails         *shared.ProblemDetails
	StatusCode             int64
}
