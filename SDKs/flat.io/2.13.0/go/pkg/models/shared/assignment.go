package shared

import (
	"time"
)

// AssignmentCanvas
// A Canvas LMS assignment
type AssignmentCanvas struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
}

// AssignmentLti
// An LTI assignment
type AssignmentLti struct {
	ID *string `json:"id,omitempty"`
}

// AssignmentMfc
// A MusicFirst Classroom assignment
type AssignmentMfc struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
}

type AssignmentStateEnum string

const (
	AssignmentStateEnumDraft    AssignmentStateEnum = "draft"
	AssignmentStateEnumActive   AssignmentStateEnum = "active"
	AssignmentStateEnumArchived AssignmentStateEnum = "archived"
)

// Assignment
// Assignment details
type Assignment struct {
	Attachments     []MediaAttachment          `json:"attachments,omitempty"`
	Canvas          *AssignmentCanvas          `json:"canvas,omitempty"`
	Classroom       *string                    `json:"classroom,omitempty"`
	Cover           *string                    `json:"cover,omitempty"`
	CoverFile       *string                    `json:"coverFile,omitempty"`
	CreationDate    *time.Time                 `json:"creationDate,omitempty"`
	Creator         *string                    `json:"creator,omitempty"`
	Description     *string                    `json:"description,omitempty"`
	DueDate         *time.Time                 `json:"dueDate,omitempty"`
	GoogleClassroom *GoogleClassroomCoursework `json:"googleClassroom,omitempty"`
	Lti             *AssignmentLti             `json:"lti,omitempty"`
	MaxPoints       *float64                   `json:"maxPoints,omitempty"`
	Mfc             *AssignmentMfc             `json:"mfc,omitempty"`
	MicrosoftGraph  *MicrosoftGraphAssignment  `json:"microsoftGraph,omitempty"`
	ScheduledDate   *time.Time                 `json:"scheduledDate,omitempty"`
	State           *AssignmentStateEnum       `json:"state,omitempty"`
	Submissions     []AssignmentSubmission     `json:"submissions,omitempty"`
	Title           *string                    `json:"title,omitempty"`
	Type            *AssignmentTypeEnum        `json:"type,omitempty"`
}
