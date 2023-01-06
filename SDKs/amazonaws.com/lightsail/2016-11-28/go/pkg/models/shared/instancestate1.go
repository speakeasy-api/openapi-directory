package shared

// InstanceState1
// Describes the virtual private server (or <i>instance</i>) status.
type InstanceState1 struct {
	Code *int64  `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}
