package shared

import (
	"time"
)

// InvalidationSummaryList
// A summary of an invalidation request.
type InvalidationSummaryList struct {
	CreateTime time.Time
	ID         string
	Status     string
}
