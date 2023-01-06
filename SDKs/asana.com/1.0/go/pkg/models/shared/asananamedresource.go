package shared

// AsanaNamedResource
// A generic Asana Resource, containing a globally unique identifier.
type AsanaNamedResource struct {
	Name *string `json:"name,omitempty"`
}
