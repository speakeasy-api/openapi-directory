package shared

import (
	"time"
)

type EventList struct {
	Date             *time.Time
	EventCategories  []map[string]interface{}
	Message          *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
