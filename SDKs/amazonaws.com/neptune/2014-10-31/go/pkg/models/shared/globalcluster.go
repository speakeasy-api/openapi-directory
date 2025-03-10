// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GlobalCluster - <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>
type GlobalCluster struct {
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
