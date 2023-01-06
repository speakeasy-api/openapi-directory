package shared

// WorkflowDetails1
// Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
type WorkflowDetails1 struct {
	OnUpload map[string]interface{} `json:"OnUpload"`
}
