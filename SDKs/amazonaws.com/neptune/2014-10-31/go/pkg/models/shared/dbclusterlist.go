package shared

import (
	"time"
)

// DbClusterList
// <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
type DbClusterList struct {
	AllocatedStorage                 *int64
	AssociatedRoles                  []DbClusterRoles
	AutomaticRestartTime             *time.Time
	AvailabilityZones                []map[string]interface{}
	BackupRetentionPeriod            *int64
	CharacterSetName                 *string
	CloneGroupID                     *string
	ClusterCreateTime                *time.Time
	CopyTagsToSnapshot               *bool
	CrossAccountClone                *bool
	DBClusterArn                     *string
	DBClusterIdentifier              *string
	DBClusterMembers                 []DbClusterMemberList
	DBClusterOptionGroupMemberships  []DbClusterOptionGroupMemberships
	DBClusterParameterGroup          *string
	DBSubnetGroup                    *string
	DatabaseName                     *string
	DbClusterResourceID              *string
	DeletionProtection               *bool
	EarliestRestorableTime           *time.Time
	EnabledCloudwatchLogsExports     []string
	Endpoint                         *string
	Engine                           *string
	EngineVersion                    *string
	HostedZoneID                     *string
	IAMDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LatestRestorableTime             *time.Time
	MasterUsername                   *string
	MultiAZ                          *bool
	PercentProgress                  *string
	Port                             *int64
	PreferredBackupWindow            *string
	PreferredMaintenanceWindow       *string
	ReadReplicaIdentifiers           []map[string]interface{}
	ReaderEndpoint                   *string
	ReplicationSourceIdentifier      *string
	Status                           *string
	StorageEncrypted                 *bool
	VpcSecurityGroups                []VpcSecurityGroupMembershipList
}
