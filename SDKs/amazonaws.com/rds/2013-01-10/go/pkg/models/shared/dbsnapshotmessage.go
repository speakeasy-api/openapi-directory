package shared

type DbSnapshotMessage struct {
	DBSnapshots []map[string]interface{}
	Marker      *string
}
