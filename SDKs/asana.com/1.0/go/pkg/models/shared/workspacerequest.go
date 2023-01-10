package shared

// WorkspaceRequestInput
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceRequestInput struct {
	Name *string `json:"name,omitempty"`
}
