package shared

// UserTaskListResponseOwner
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type UserTaskListResponseOwner struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// UserTaskListResponseWorkspace
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type UserTaskListResponseWorkspace struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// UserTaskListResponse
// A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
type UserTaskListResponse struct {
	Gid          *string                        `json:"gid,omitempty"`
	Name         *string                        `json:"name,omitempty"`
	Owner        *UserTaskListResponseOwner     `json:"owner,omitempty"`
	ResourceType *string                        `json:"resource_type,omitempty"`
	Workspace    *UserTaskListResponseWorkspace `json:"workspace,omitempty"`
}
