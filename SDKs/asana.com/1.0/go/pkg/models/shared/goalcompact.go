package shared

// GoalCompactOwner
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type GoalCompactOwner struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// GoalCompact
// A generic Asana Resource, containing a globally unique identifier.
type GoalCompact struct {
	Gid          *string           `json:"gid,omitempty"`
	Name         *string           `json:"name,omitempty"`
	Owner        *GoalCompactOwner `json:"owner,omitempty"`
	ResourceType *string           `json:"resource_type,omitempty"`
}
