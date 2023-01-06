package shared

// DbClusterSnapshotAttributeList
// <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other accounts to restore a manual cluster snapshot.</p>
type DbClusterSnapshotAttributeList struct {
	AttributeName   *string
	AttributeValues []map[string]interface{}
}
