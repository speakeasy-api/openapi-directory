package shared

type DbClusterSnapshotMessage struct {
	DBClusterSnapshots []DbClusterSnapshotList
	Marker             *string
}
