package shared

// WorkspaceCompact
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceCompact struct {
	Name *string `json:"name,omitempty"`
}
