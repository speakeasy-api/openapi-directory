package shared

// ModificationState
// Describes a WorkSpace modification.
type ModificationState struct {
	Resource *ModificationResourceEnumEnum `json:"Resource,omitempty"`
	State    map[string]interface{}        `json:"State,omitempty"`
}
