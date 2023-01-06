package shared

// ControlSet1
//
//	A set of controls in Audit Manager.
type ControlSet1 struct {
	Controls []Control1 `json:"controls,omitempty"`
	ID       *string    `json:"id,omitempty"`
	Name     *string    `json:"name,omitempty"`
}
