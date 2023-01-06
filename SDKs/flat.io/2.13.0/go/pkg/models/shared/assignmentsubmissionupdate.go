package shared

type AssignmentSubmissionUpdateComments struct {
	Total  *float64 `json:"total,omitempty"`
	Unread *float64 `json:"unread,omitempty"`
}

// AssignmentSubmissionUpdate
// Assignment Submission creation
type AssignmentSubmissionUpdate struct {
	Attachments []ClassAttachmentCreation           `json:"attachments,omitempty"`
	Comments    *AssignmentSubmissionUpdateComments `json:"comments,omitempty"`
	DraftGrade  *float64                            `json:"draftGrade,omitempty"`
	Grade       *float64                            `json:"grade,omitempty"`
	Return      *bool                               `json:"return,omitempty"`
	Submit      *bool                               `json:"submit,omitempty"`
}
