package shared

// ProjectRequest
// A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
type ProjectRequest struct {
	CustomFields map[string]string `json:"custom_fields,omitempty"`
	Followers    *string           `json:"followers,omitempty"`
	Owner        *string           `json:"owner,omitempty"`
	Team         *string           `json:"team,omitempty"`
}
