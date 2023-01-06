package shared

// WorkspaceMembershipCompact
// This object determines if a user is a member of a workspace.
type WorkspaceMembershipCompact struct {
	User      *UserCompact      `json:"user,omitempty"`
	Workspace *WorkspaceCompact `json:"workspace,omitempty"`
}
