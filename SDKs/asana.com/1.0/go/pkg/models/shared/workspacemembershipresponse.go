package shared

// WorkspaceMembershipResponse
// This object determines if a user is a member of a workspace.
type WorkspaceMembershipResponse struct {
	IsActive     *bool                 `json:"is_active,omitempty"`
	IsAdmin      *bool                 `json:"is_admin,omitempty"`
	IsGuest      *bool                 `json:"is_guest,omitempty"`
	UserTaskList *UserTaskListResponse `json:"user_task_list,omitempty"`
}
