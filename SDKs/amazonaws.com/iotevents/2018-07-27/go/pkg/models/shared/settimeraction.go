package shared

// SetTimerAction
// Information needed to set the timer.
type SetTimerAction struct {
	DurationExpression *string                `json:"durationExpression,omitempty"`
	Seconds            map[string]interface{} `json:"seconds,omitempty"`
	TimerName          string                 `json:"timerName"`
}
