package shared

// TaskRequest
// The *task* is the basic object around which many operations in Asana are centered.
type TaskRequest struct {
	Assignee        *string           `json:"assignee,omitempty"`
	AssigneeSection *string           `json:"assignee_section,omitempty"`
	CustomFields    map[string]string `json:"custom_fields,omitempty"`
	Followers       []string          `json:"followers,omitempty"`
	Parent          *string           `json:"parent,omitempty"`
	Projects        []string          `json:"projects,omitempty"`
	Tags            []string          `json:"tags,omitempty"`
	Workspace       *string           `json:"workspace,omitempty"`
}
