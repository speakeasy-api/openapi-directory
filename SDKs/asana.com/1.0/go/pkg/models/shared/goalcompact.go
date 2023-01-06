package shared

// GoalCompact
// A generic Asana Resource, containing a globally unique identifier.
type GoalCompact struct {
	Name  *string                `json:"name,omitempty"`
	Owner map[string]interface{} `json:"owner,omitempty"`
}
