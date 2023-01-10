package shared

type BatchDeleteClusterSnapshotsResult struct {
	Errors    []BatchSnapshotOperationErrorList
	Resources []map[string]interface{}
}
