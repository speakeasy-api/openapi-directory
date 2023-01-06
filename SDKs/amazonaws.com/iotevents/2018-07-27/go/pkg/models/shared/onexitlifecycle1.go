package shared

// OnExitLifecycle1
// When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
type OnExitLifecycle1 struct {
	Events []Event `json:"events,omitempty"`
}
