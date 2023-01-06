package shared

// CancelWorkflowExecutionFailedEventAttributes1
// Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
type CancelWorkflowExecutionFailedEventAttributes1 struct {
	Cause                        map[string]interface{} `json:"cause"`
	DecisionTaskCompletedEventID int64                  `json:"decisionTaskCompletedEventId"`
}
