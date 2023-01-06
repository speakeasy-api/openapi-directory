package shared

// ClassCreation
// Creation of a classroom
type ClassCreation struct {
	Name    string  `json:"name"`
	Section *string `json:"section,omitempty"`
}
