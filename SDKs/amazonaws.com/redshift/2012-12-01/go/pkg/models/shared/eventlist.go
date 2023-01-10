package shared

import (
	"time"
)

// EventList
// Describes an event.
type EventList struct {
	Date             *time.Time
	EventCategories  []map[string]interface{}
	EventID          *string
	Message          *string
	Severity         *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
