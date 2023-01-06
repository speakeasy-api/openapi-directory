package shared

type DbClusterSnapshotMessage struct {
	DBClusterSnapshots []map[string]interface{}
	Marker             *string
}
