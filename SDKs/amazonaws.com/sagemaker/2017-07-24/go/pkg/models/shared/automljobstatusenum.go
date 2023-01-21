package shared

type AutoMlJobStatusEnum string

const (
	AutoMLJobStatusEnumCompleted  AutoMlJobStatusEnum = "Completed"
	AutoMLJobStatusEnumInProgress AutoMlJobStatusEnum = "InProgress"
	AutoMLJobStatusEnumFailed     AutoMlJobStatusEnum = "Failed"
	AutoMLJobStatusEnumStopped    AutoMlJobStatusEnum = "Stopped"
	AutoMLJobStatusEnumStopping   AutoMlJobStatusEnum = "Stopping"
)
