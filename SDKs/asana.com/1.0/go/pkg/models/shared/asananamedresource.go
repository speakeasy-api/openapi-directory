package shared

// AsanaNamedResource
// A generic Asana Resource, containing a globally unique identifier.
type AsanaNamedResource struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
