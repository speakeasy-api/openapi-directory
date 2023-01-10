package shared

type DbSnapshotMessage struct {
	DBSnapshots []DbSnapshotList
	Marker      *string
}
