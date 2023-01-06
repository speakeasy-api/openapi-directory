package shared

// GoogleClassroomSubmission
// A coursework submission on Google Classroom
type GoogleClassroomSubmission struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	State         *string `json:"state,omitempty"`
}
