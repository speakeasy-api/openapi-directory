package shared

// TagRequest
// A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
type TagRequest struct {
	Followers []string `json:"followers,omitempty"`
	Workspace *string  `json:"workspace,omitempty"`
}
