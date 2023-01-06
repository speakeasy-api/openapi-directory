package shared

// ModificationState1
// Describes a WorkSpace modification.
type ModificationState1 struct {
	Resource *ModificationResourceEnumEnum `json:"Resource,omitempty"`
	State    *ModificationStateEnumEnum    `json:"State,omitempty"`
}
