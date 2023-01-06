package shared

// MicrosoftGraphAssignment
// A Microsoft Teams asignment
type MicrosoftGraphAssignment struct {
	AlternateLink *string  `json:"alternateLink,omitempty"`
	Categories    []string `json:"categories,omitempty"`
	ID            *string  `json:"id,omitempty"`
	State         *string  `json:"state,omitempty"`
}
