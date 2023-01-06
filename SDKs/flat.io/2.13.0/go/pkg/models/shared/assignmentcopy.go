package shared

import (
	"time"
)

// AssignmentCopy
// Assignment copy operation
type AssignmentCopy struct {
	Assignment    *string    `json:"assignment,omitempty"`
	Classroom     *string    `json:"classroom,omitempty"`
	ScheduledDate *time.Time `json:"scheduledDate,omitempty"`
}
