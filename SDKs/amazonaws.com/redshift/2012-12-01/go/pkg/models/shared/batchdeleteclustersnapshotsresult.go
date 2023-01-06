package shared

type BatchDeleteClusterSnapshotsResult struct {
	Errors    []map[string]interface{}
	Resources []map[string]interface{}
}
