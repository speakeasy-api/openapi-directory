package shared

// UserTaskListResponseOwner
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type UserTaskListResponseOwner struct {
	Name *string `json:"name,omitempty"`
}

// UserTaskListResponseWorkspace
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type UserTaskListResponseWorkspace struct {
	Name *string `json:"name,omitempty"`
}

// UserTaskListResponse
// A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
type UserTaskListResponse struct {
	Name      *string                        `json:"name,omitempty"`
	Owner     *UserTaskListResponseOwner     `json:"owner,omitempty"`
	Workspace *UserTaskListResponseWorkspace `json:"workspace,omitempty"`
}
