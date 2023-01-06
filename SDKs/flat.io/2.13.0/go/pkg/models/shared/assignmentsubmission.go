package shared

// AssignmentSubmission
// Assignment Submission
type AssignmentSubmission struct {
	Assignment      *string                        `json:"assignment,omitempty"`
	Attachments     []MediaAttachment              `json:"attachments,omitempty"`
	Classroom       *string                        `json:"classroom,omitempty"`
	CreationDate    *string                        `json:"creationDate,omitempty"`
	Creator         *string                        `json:"creator,omitempty"`
	DraftGrade      *float64                       `json:"draftGrade,omitempty"`
	GoogleClassroom *GoogleClassroomSubmission     `json:"googleClassroom,omitempty"`
	Grade           *float64                       `json:"grade,omitempty"`
	ID              *string                        `json:"id,omitempty"`
	MaxPoints       *float64                       `json:"maxPoints,omitempty"`
	MicrosoftGraph  *MicrosoftGraphSubmission      `json:"microsoftGraph,omitempty"`
	ReturnCreator   *string                        `json:"returnCreator,omitempty"`
	ReturnDate      *string                        `json:"returnDate,omitempty"`
	State           *AssignmentSubmissionStateEnum `json:"state,omitempty"`
	SubmissionDate  *string                        `json:"submissionDate,omitempty"`
}
