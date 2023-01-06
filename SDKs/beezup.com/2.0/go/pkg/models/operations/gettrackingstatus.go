package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackingStatusResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	TrackingStatus                   *shared.TrackingStatus
}
