package shared

import (
	"time"
)

// DocumentAttributeValue
// The value of a custom document attribute. You can only provide one value for a custom attribute.
type DocumentAttributeValue struct {
	DateValue       *time.Time `json:"DateValue,omitempty"`
	LongValue       *int64     `json:"LongValue,omitempty"`
	StringListValue []string   `json:"StringListValue,omitempty"`
	StringValue     *string    `json:"StringValue,omitempty"`
}
