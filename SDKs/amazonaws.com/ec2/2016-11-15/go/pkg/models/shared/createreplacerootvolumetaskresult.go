package shared

// CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask
// Information about the root volume replacement task.
type CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask struct {
	CompleteTime            map[string]interface{}
	InstanceID              map[string]interface{}
	ReplaceRootVolumeTaskID map[string]interface{}
	StartTime               map[string]interface{}
	Tags                    map[string]interface{}
	TaskState               map[string]interface{}
}

type CreateReplaceRootVolumeTaskResult struct {
	ReplaceRootVolumeTask *CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask
}
