package shared

import (
	"time"
)

type AssignmentCreationAssigneeModeEnum string

const (
	AssignmentCreationAssigneeModeEnumEveryone AssignmentCreationAssigneeModeEnum = "everyone"
	AssignmentCreationAssigneeModeEnumSelected AssignmentCreationAssigneeModeEnum = "selected"
)

// AssignmentCreationGoogleClassroom
// Google Classroom options for this assignment
type AssignmentCreationGoogleClassroom struct {
	TopicID *string `json:"topicId,omitempty"`
}

// AssignmentCreationMicrosoftGraph
// Microsoft Graph options for this assignment
type AssignmentCreationMicrosoftGraph struct {
	Categories []string `json:"categories,omitempty"`
}

type AssignmentCreationStateEnum string

const (
	AssignmentCreationStateEnumDraft  AssignmentCreationStateEnum = "draft"
	AssignmentCreationStateEnumActive AssignmentCreationStateEnum = "active"
)

// AssignmentCreation
// Assignment creation details
type AssignmentCreation struct {
	AssignedStudents     []string                            `json:"assignedStudents,omitempty"`
	AssigneeMode         *AssignmentCreationAssigneeModeEnum `json:"assigneeMode,omitempty"`
	Attachments          []ClassAttachmentCreation           `json:"attachments,omitempty"`
	Cover                *string                             `json:"cover,omitempty"`
	CoverFile            *string                             `json:"coverFile,omitempty"`
	Description          *string                             `json:"description,omitempty"`
	DueDate              *time.Time                          `json:"dueDate,omitempty"`
	GoogleClassroom      *AssignmentCreationGoogleClassroom  `json:"googleClassroom,omitempty"`
	MaxPoints            *float64                            `json:"maxPoints,omitempty"`
	MicrosoftGraph       *AssignmentCreationMicrosoftGraph   `json:"microsoftGraph,omitempty"`
	NbPlaybackAuthorized *float64                            `json:"nbPlaybackAuthorized,omitempty"`
	ScheduledDate        *time.Time                          `json:"scheduledDate,omitempty"`
	State                *AssignmentCreationStateEnum        `json:"state,omitempty"`
	Title                *string                             `json:"title,omitempty"`
	Toolset              *string                             `json:"toolset,omitempty"`
	Type                 *AssignmentTypeEnum                 `json:"type,omitempty"`
}
