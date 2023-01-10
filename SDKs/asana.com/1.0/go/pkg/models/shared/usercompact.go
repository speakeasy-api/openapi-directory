package shared

// UserCompact
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type UserCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// UserCompactInput
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type UserCompactInput struct {
	Name *string `json:"name,omitempty"`
}
