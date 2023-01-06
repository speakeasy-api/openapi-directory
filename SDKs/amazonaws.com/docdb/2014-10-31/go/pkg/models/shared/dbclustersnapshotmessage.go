package shared

// DbClusterSnapshotMessage
// Represents the output of <a>DescribeDBClusterSnapshots</a>.
type DbClusterSnapshotMessage struct {
	DBClusterSnapshots []map[string]interface{}
	Marker             *string
}
