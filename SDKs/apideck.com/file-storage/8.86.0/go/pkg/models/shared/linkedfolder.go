package shared

type LinkedFolder struct {
	ID   string  `json:"id"`
	Name *string `json:"name,omitempty"`
}
