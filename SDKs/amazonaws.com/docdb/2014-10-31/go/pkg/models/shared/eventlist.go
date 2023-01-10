package shared

import (
	"time"
)

// EventList
// Detailed information about an event.
type EventList struct {
	Date             *time.Time
	EventCategories  []map[string]interface{}
	Message          *string
	SourceArn        *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
