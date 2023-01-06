package shared

// StartWorkflowExecutionInputTaskList
// Represents a task list.
type StartWorkflowExecutionInputTaskList struct {
	Name string `json:"name"`
}

type StartWorkflowExecutionInput struct {
	ChildPolicy                  *ChildPolicyEnum                     `json:"childPolicy,omitempty"`
	Domain                       string                               `json:"domain"`
	ExecutionStartToCloseTimeout *string                              `json:"executionStartToCloseTimeout,omitempty"`
	Input                        *string                              `json:"input,omitempty"`
	LambdaRole                   *string                              `json:"lambdaRole,omitempty"`
	TagList                      []string                             `json:"tagList,omitempty"`
	TaskList                     *StartWorkflowExecutionInputTaskList `json:"taskList,omitempty"`
	TaskPriority                 *string                              `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      *string                              `json:"taskStartToCloseTimeout,omitempty"`
	WorkflowID                   string                               `json:"workflowId"`
	WorkflowType                 WorkflowType                         `json:"workflowType"`
}
