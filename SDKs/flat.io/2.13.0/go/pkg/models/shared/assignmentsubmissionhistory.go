package shared

import (
	"time"
)

type AssignmentSubmissionHistoryAttachment struct {
	Revision *string `json:"revision,omitempty"`
	Score    *string `json:"score,omitempty"`
}

// AssignmentSubmissionHistory
// History item of the submission
type AssignmentSubmissionHistory struct {
	Attachment *AssignmentSubmissionHistoryAttachment `json:"attachment,omitempty"`
	Date       *time.Time                             `json:"date,omitempty"`
	DraftGrade *float64                               `json:"draftGrade,omitempty"`
	Grade      *float64                               `json:"grade,omitempty"`
	MaxPoints  *float64                               `json:"maxPoints,omitempty"`
	State      *AssignmentSubmissionStateEnum         `json:"state,omitempty"`
	Users      []string                               `json:"users,omitempty"`
}
