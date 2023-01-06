package shared

// DbSnapshotMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
type DbSnapshotMessage struct {
	DBSnapshots []map[string]interface{}
	Marker      *string
}
