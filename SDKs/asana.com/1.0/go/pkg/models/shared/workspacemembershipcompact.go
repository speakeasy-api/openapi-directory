package shared

// WorkspaceMembershipCompact
// This object determines if a user is a member of a workspace.
type WorkspaceMembershipCompact struct {
	Gid          *string           `json:"gid,omitempty"`
	ResourceType *string           `json:"resource_type,omitempty"`
	User         *UserCompact      `json:"user,omitempty"`
	Workspace    *WorkspaceCompact `json:"workspace,omitempty"`
}
