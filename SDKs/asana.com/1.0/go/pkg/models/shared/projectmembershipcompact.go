package shared

// ProjectMembershipCompact
// With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
type ProjectMembershipCompact struct {
	Gid          *string      `json:"gid,omitempty"`
	ResourceType *string      `json:"resource_type,omitempty"`
	User         *UserCompact `json:"user,omitempty"`
}
