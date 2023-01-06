package shared

type ExportTasksMessage struct {
	ExportTasks []map[string]interface{}
	Marker      *string
}
