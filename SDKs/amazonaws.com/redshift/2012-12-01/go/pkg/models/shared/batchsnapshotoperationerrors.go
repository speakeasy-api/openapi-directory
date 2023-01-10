package shared

// BatchSnapshotOperationErrors
// Describes the errors returned by a snapshot.
type BatchSnapshotOperationErrors struct {
	FailureCode               *string
	FailureReason             *string
	SnapshotClusterIdentifier *string
	SnapshotIdentifier        *string
}
