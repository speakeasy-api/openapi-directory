package shared

// GlobalCluster
// A data type representing an Amazon DocumentDB global cluster.
type GlobalCluster struct {
	DatabaseName            *string
	DeletionProtection      *bool
	Engine                  *string
	EngineVersion           *string
	GlobalClusterArn        *string
	GlobalClusterIdentifier *string
	GlobalClusterMembers    []GlobalClusterMemberList
	GlobalClusterResourceID *string
	Status                  *string
	StorageEncrypted        *bool
}
