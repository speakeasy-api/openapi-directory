package shared

// TagCompact
// A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
type TagCompact struct {
	Name *string `json:"name,omitempty"`
}
