package shared

// GlobalCluster1
// A data type representing an Aurora global database.
type GlobalCluster1 struct {
	DatabaseName            *string
	DeletionProtection      *bool
	Engine                  *string
	EngineVersion           *string
	FailoverState           *FailoverState1
	GlobalClusterArn        *string
	GlobalClusterIdentifier *string
	GlobalClusterMembers    []map[string]interface{}
	GlobalClusterResourceID *string
	Status                  *string
	StorageEncrypted        *bool
}
