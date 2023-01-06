package shared

import (
	"time"
)

// StoryCompact
// A story represents an activity associated with an object in the Asana system.
type StoryCompact struct {
	CreatedAt       *time.Time   `json:"created_at,omitempty"`
	CreatedBy       *UserCompact `json:"created_by,omitempty"`
	ResourceSubtype *string      `json:"resource_subtype,omitempty"`
	Text            *string      `json:"text,omitempty"`
}
