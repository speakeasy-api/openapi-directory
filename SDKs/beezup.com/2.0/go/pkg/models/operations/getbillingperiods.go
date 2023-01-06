package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillingPeriodsHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetBillingPeriodsRequest struct {
	Headers GetBillingPeriodsHeaders
}

type GetBillingPeriodsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	BillingPeriodList                *shared.BillingPeriodList
}
