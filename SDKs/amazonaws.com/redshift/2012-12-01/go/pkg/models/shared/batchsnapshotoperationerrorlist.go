package shared

// BatchSnapshotOperationErrorList
// Describes the errors returned by a snapshot.
type BatchSnapshotOperationErrorList struct {
	FailureCode               *string
	FailureReason             *string
	SnapshotClusterIdentifier *string
	SnapshotIdentifier        *string
}
