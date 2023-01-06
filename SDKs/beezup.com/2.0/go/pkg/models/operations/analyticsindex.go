package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	AnalyticsIndex                   *shared.AnalyticsIndex
}
