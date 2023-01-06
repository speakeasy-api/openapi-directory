package shared

import (
	"time"
)

// AssignmentSubmissionComment
// Feedback comment added to an assignment submission
type AssignmentSubmissionComment struct {
	Comment          *string    `json:"comment,omitempty"`
	Date             *time.Time `json:"date,omitempty"`
	ID               *string    `json:"id,omitempty"`
	ModificationDate *time.Time `json:"modificationDate,omitempty"`
	Submission       *string    `json:"submission,omitempty"`
	Unread           *bool      `json:"unread,omitempty"`
	User             *string    `json:"user,omitempty"`
}
