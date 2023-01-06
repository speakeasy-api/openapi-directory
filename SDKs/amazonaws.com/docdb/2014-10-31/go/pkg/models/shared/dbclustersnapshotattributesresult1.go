package shared

// DbClusterSnapshotAttributesResult1
// Detailed information about the attributes that are associated with a cluster snapshot.
type DbClusterSnapshotAttributesResult1 struct {
	DBClusterSnapshotAttributes []map[string]interface{}
	DBClusterSnapshotIdentifier *string
}
