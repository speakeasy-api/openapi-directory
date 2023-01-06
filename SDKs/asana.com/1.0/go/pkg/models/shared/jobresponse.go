package shared

type JobResponseStatusEnum string

const (
	JobResponseStatusEnumNotStarted JobResponseStatusEnum = "not_started"
	JobResponseStatusEnumInProgress JobResponseStatusEnum = "in_progress"
	JobResponseStatusEnumCompleted  JobResponseStatusEnum = "completed"
	JobResponseStatusEnumFailed     JobResponseStatusEnum = "failed"
)

// JobResponse
// A *job* is an object representing a process that handles asynchronous work.
type JobResponse struct {
	NewProject      *ProjectCompact        `json:"new_project,omitempty"`
	NewTask         *TaskCompact           `json:"new_task,omitempty"`
	ResourceSubtype *string                `json:"resource_subtype,omitempty"`
	Status          *JobResponseStatusEnum `json:"status,omitempty"`
}
