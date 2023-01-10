package shared

// BundleInstanceResultBundleTaskBundleTaskError
// If the task fails, a description of the error.
type BundleInstanceResultBundleTaskBundleTaskError struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// BundleInstanceResultBundleTaskStorage
// The Amazon S3 storage locations.
type BundleInstanceResultBundleTaskStorage struct {
	S3 *S3Storage
}

// BundleInstanceResultBundleTask
// Information about the bundle task.
type BundleInstanceResultBundleTask struct {
	BundleID        map[string]interface{}
	BundleTaskError *BundleInstanceResultBundleTaskBundleTaskError
	InstanceID      map[string]interface{}
	Progress        map[string]interface{}
	StartTime       map[string]interface{}
	State           map[string]interface{}
	Storage         *BundleInstanceResultBundleTaskStorage
	UpdateTime      map[string]interface{}
}

// BundleInstanceResult
// Contains the output of BundleInstance.
type BundleInstanceResult struct {
	BundleTask *BundleInstanceResultBundleTask
}
