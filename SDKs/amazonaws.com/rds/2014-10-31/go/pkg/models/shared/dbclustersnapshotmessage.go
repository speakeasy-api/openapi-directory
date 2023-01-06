package shared

// DbClusterSnapshotMessage
//
//	Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.
type DbClusterSnapshotMessage struct {
	DBClusterSnapshots []map[string]interface{}
	Marker             *string
}
