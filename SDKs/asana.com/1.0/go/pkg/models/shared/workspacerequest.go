package shared

// WorkspaceRequest
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceRequest struct {
	Name *string `json:"name,omitempty"`
}
