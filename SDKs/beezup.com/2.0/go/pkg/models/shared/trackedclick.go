package shared

import (
	"time"
)

type TrackedClick struct {
	Channel   BeezUpCommonChannelBasicInfo `json:"channel"`
	IPAddress string                       `json:"ipAddress"`
	Product   BeezUpCommonProductBasicInfo `json:"product"`
	UtcDate   time.Time                    `json:"utcDate"`
}
