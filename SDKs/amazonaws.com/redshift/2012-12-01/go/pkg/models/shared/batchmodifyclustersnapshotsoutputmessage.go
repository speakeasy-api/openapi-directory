package shared

type BatchModifyClusterSnapshotsOutputMessage struct {
	Errors    []map[string]interface{}
	Resources []map[string]interface{}
}
