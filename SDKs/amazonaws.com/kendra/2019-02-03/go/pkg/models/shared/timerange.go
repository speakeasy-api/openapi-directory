package shared

import (
	"time"
)

// TimeRange
// Provides a range of time.
type TimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
}
