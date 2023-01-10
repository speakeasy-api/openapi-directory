package shared

type BatchModifyClusterSnapshotsOutputMessage struct {
	Errors    []BatchSnapshotOperationErrors
	Resources []map[string]interface{}
}
