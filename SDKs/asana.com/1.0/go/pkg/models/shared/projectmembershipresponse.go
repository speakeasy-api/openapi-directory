package shared

type ProjectMembershipResponseWriteAccessEnum string

const (
	ProjectMembershipResponseWriteAccessEnumFullWrite   ProjectMembershipResponseWriteAccessEnum = "full_write"
	ProjectMembershipResponseWriteAccessEnumCommentOnly ProjectMembershipResponseWriteAccessEnum = "comment_only"
)

// ProjectMembershipResponse
// With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
type ProjectMembershipResponse struct {
	Project     *ProjectCompact                           `json:"project,omitempty"`
	WriteAccess *ProjectMembershipResponseWriteAccessEnum `json:"write_access,omitempty"`
}
