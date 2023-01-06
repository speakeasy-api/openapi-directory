package shared

// TaskResponseAssignee
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type TaskResponseAssignee struct {
	Name *string `json:"name,omitempty"`
}

// TaskResponse
// The *task* is the basic object around which many operations in Asana are centered.
type TaskResponse struct {
	Assignee        *TaskResponseAssignee  `json:"assignee,omitempty"`
	AssigneeSection map[string]interface{} `json:"assignee_section,omitempty"`
	CustomFields    []CustomFieldResponse  `json:"custom_fields,omitempty"`
	Followers       []UserCompact          `json:"followers,omitempty"`
	Parent          map[string]interface{} `json:"parent,omitempty"`
	PermalinkURL    *string                `json:"permalink_url,omitempty"`
	Projects        []ProjectCompact       `json:"projects,omitempty"`
	Tags            []TagCompact           `json:"tags,omitempty"`
	Workspace       map[string]interface{} `json:"workspace,omitempty"`
}
