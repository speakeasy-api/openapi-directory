package shared

// DbClusterSnapshotAttributesResult
// Detailed information about the attributes that are associated with a cluster snapshot.
type DbClusterSnapshotAttributesResult struct {
	DBClusterSnapshotAttributes []DbClusterSnapshotAttributeList
	DBClusterSnapshotIdentifier *string
}
