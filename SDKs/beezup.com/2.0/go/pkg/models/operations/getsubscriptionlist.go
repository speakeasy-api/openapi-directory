package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	SubscriptionIndices              []shared.SubscriptionIndex
}
