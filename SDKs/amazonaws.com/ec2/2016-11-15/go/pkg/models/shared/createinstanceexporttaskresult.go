package shared

// CreateInstanceExportTaskResultExportTaskExportToS3Task
// Information about the export task.
type CreateInstanceExportTaskResultExportTaskExportToS3Task struct {
	ContainerFormat map[string]interface{}
	DiskImageFormat map[string]interface{}
	S3Bucket        map[string]interface{}
	S3Key           map[string]interface{}
}

// CreateInstanceExportTaskResultExportTaskInstanceExportDetails
// Information about the instance to export.
type CreateInstanceExportTaskResultExportTaskInstanceExportDetails struct {
	InstanceID        map[string]interface{}
	TargetEnvironment map[string]interface{}
}

// CreateInstanceExportTaskResultExportTask
// Information about the export instance task.
type CreateInstanceExportTaskResultExportTask struct {
	Description           map[string]interface{}
	ExportTaskID          map[string]interface{}
	ExportToS3Task        *CreateInstanceExportTaskResultExportTaskExportToS3Task
	InstanceExportDetails *CreateInstanceExportTaskResultExportTaskInstanceExportDetails
	State                 map[string]interface{}
	StatusMessage         map[string]interface{}
	Tags                  map[string]interface{}
}

type CreateInstanceExportTaskResult struct {
	ExportTask *CreateInstanceExportTaskResultExportTask
}
