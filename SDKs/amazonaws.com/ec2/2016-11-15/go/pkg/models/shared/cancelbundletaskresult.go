package shared

// CancelBundleTaskResultBundleTaskBundleTaskError
// If the task fails, a description of the error.
type CancelBundleTaskResultBundleTaskBundleTaskError struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// CancelBundleTaskResultBundleTaskStorage
// The Amazon S3 storage locations.
type CancelBundleTaskResultBundleTaskStorage struct {
	S3 *S3Storage
}

// CancelBundleTaskResultBundleTask
// Information about the bundle task.
type CancelBundleTaskResultBundleTask struct {
	BundleID        map[string]interface{}
	BundleTaskError *CancelBundleTaskResultBundleTaskBundleTaskError
	InstanceID      map[string]interface{}
	Progress        map[string]interface{}
	StartTime       map[string]interface{}
	State           map[string]interface{}
	Storage         *CancelBundleTaskResultBundleTaskStorage
	UpdateTime      map[string]interface{}
}

// CancelBundleTaskResult
// Contains the output of CancelBundleTask.
type CancelBundleTaskResult struct {
	BundleTask *CancelBundleTaskResultBundleTask
}
