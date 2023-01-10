package shared

// GlobalClusterList
// A data type representing an Aurora global database.
type GlobalClusterList struct {
	DatabaseName            *string
	DeletionProtection      *bool
	Engine                  *string
	EngineVersion           *string
	FailoverState           *FailoverState
	GlobalClusterArn        *string
	GlobalClusterIdentifier *string
	GlobalClusterMembers    []GlobalClusterMemberList
	GlobalClusterResourceID *string
	Status                  *string
	StorageEncrypted        *bool
}
