package shared

// GoalMetricCurrentValueRequest
// A generic Asana Resource, containing a globally unique identifier.
type GoalMetricCurrentValueRequest struct {
	CurrentNumberValue *float64 `json:"current_number_value,omitempty"`
}
