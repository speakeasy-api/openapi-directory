package shared

// TeamCompact
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type TeamCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
