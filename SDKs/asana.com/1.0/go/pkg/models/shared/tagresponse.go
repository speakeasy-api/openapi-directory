package shared

// TagResponse
// A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
type TagResponse struct {
	Followers    []UserCompact     `json:"followers,omitempty"`
	PermalinkURL *string           `json:"permalink_url,omitempty"`
	Workspace    *WorkspaceCompact `json:"workspace,omitempty"`
}

// TagResponseInput
// A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
type TagResponseInput struct {
	Workspace *WorkspaceCompact `json:"workspace,omitempty"`
}
