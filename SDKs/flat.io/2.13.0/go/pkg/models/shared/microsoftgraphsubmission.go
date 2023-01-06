package shared

// MicrosoftGraphSubmission
// A Microsoft Teams submission
type MicrosoftGraphSubmission struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	State         *string `json:"state,omitempty"`
}
