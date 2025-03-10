// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// AssignmentSubmissionComment - Feedback comment added to an assignment submission
type AssignmentSubmissionComment struct {
	// The comment text
	Comment *string `json:"comment,omitempty"`
	// The date when the comment was posted
	Date *time.Time `json:"date,omitempty"`
	// The comment unique identifier
	ID *string `json:"id,omitempty"`
	// The date of the last comment modification
	ModificationDate *time.Time `json:"modificationDate,omitempty"`
	// The submission unique identifier
	Submission *string `json:"submission,omitempty"`
	// True if the comment is unread by the current user
	Unread *bool `json:"unread,omitempty"`
	// The author unique identifier
	User *string `json:"user,omitempty"`
}
