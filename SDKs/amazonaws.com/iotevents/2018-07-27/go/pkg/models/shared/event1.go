package shared

// Event1
// Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
type Event1 struct {
	Actions   map[string]interface{} `json:"actions,omitempty"`
	Condition *string                `json:"condition,omitempty"`
	EventName string                 `json:"eventName"`
}
