package shared

// TagCompact
// A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
type TagCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
