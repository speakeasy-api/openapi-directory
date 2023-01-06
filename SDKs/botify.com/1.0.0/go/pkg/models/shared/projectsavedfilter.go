package shared

type ProjectSavedFilter struct {
	Filters    map[string]interface{} `json:"filters"`
	Identifier *string                `json:"identifier,omitempty"`
	Name       string                 `json:"name"`
}
