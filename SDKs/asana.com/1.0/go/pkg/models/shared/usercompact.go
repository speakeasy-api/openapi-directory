package shared

// UserCompact
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type UserCompact struct {
	Name *string `json:"name,omitempty"`
}
