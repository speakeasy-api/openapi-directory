package shared

import (
	"time"
)

// EventList
//
//	This data type is used as a response element in the <code>DescribeEvents</code> action.
type EventList struct {
	Date             *time.Time
	EventCategories  []map[string]interface{}
	Message          *string
	SourceArn        *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
