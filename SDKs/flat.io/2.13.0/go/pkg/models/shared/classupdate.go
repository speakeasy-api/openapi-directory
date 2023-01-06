package shared

// ClassUpdate
// Update of a classroom
type ClassUpdate struct {
	Name    *string `json:"name,omitempty"`
	Section *string `json:"section,omitempty"`
}
