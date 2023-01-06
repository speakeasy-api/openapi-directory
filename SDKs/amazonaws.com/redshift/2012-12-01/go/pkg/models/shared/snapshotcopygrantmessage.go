package shared

// SnapshotCopyGrantMessage
// <p/>
type SnapshotCopyGrantMessage struct {
	Marker             *string
	SnapshotCopyGrants []map[string]interface{}
}
