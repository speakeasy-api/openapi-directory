package shared

type CancelImportTaskResult struct {
	ImportTaskID  map[string]interface{}
	PreviousState map[string]interface{}
	State         map[string]interface{}
}
