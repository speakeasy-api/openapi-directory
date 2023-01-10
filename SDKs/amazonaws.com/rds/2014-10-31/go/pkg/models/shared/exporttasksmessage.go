package shared

type ExportTasksMessage struct {
	ExportTasks []ExportTasksList
	Marker      *string
}
