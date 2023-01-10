package shared

// ImportSnapshotResultSnapshotTaskDetailUserBucket
// The Amazon S3 bucket for the disk image.
type ImportSnapshotResultSnapshotTaskDetailUserBucket struct {
	S3Bucket map[string]interface{}
	S3Key    map[string]interface{}
}

// ImportSnapshotResultSnapshotTaskDetail
// Information about the import snapshot task.
type ImportSnapshotResultSnapshotTaskDetail struct {
	Description   map[string]interface{}
	DiskImageSize map[string]interface{}
	Encrypted     map[string]interface{}
	Format        map[string]interface{}
	KmsKeyID      map[string]interface{}
	Progress      map[string]interface{}
	SnapshotID    map[string]interface{}
	Status        map[string]interface{}
	StatusMessage map[string]interface{}
	URL           map[string]interface{}
	UserBucket    *ImportSnapshotResultSnapshotTaskDetailUserBucket
}

type ImportSnapshotResult struct {
	Description        map[string]interface{}
	ImportTaskID       map[string]interface{}
	SnapshotTaskDetail *ImportSnapshotResultSnapshotTaskDetail
	Tags               map[string]interface{}
}
