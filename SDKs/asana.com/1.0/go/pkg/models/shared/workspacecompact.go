package shared

// WorkspaceCompact
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// WorkspaceCompactInput
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceCompactInput struct {
	Name *string `json:"name,omitempty"`
}
