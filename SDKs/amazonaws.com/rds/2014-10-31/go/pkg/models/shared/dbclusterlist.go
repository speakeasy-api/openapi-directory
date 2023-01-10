package shared

import (
	"time"
)

// DbClusterList
// <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
type DbClusterList struct {
	ActivityStreamKinesisStreamName  *string
	ActivityStreamKmsKeyID           *string
	ActivityStreamMode               *ActivityStreamModeEnum
	ActivityStreamStatus             *ActivityStreamStatusEnum
	AllocatedStorage                 *int64
	AssociatedRoles                  []DbClusterRoles
	AutomaticRestartTime             *time.Time
	AvailabilityZones                []map[string]interface{}
	BacktrackConsumedChangeRecords   *int64
	BacktrackWindow                  *int64
	BackupRetentionPeriod            *int64
	Capacity                         *int64
	CharacterSetName                 *string
	CloneGroupID                     *string
	ClusterCreateTime                *time.Time
	CopyTagsToSnapshot               *bool
	CrossAccountClone                *bool
	CustomEndpoints                  []string
	DBClusterArn                     *string
	DBClusterIdentifier              *string
	DBClusterMembers                 []DbClusterMemberList
	DBClusterOptionGroupMemberships  []DbClusterOptionGroupMemberships
	DBClusterParameterGroup          *string
	DBSubnetGroup                    *string
	DatabaseName                     *string
	DbClusterResourceID              *string
	DeletionProtection               *bool
	DomainMemberships                []DomainMembershipList
	EarliestBacktrackTime            *time.Time
	EarliestRestorableTime           *time.Time
	EnabledCloudwatchLogsExports     []string
	Endpoint                         *string
	Engine                           *string
	EngineMode                       *string
	EngineVersion                    *string
	GlobalWriteForwardingRequested   *bool
	GlobalWriteForwardingStatus      *WriteForwardingStatusEnum
	HostedZoneID                     *string
	HTTPEndpointEnabled              *bool
	IAMDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LatestRestorableTime             *time.Time
	MasterUsername                   *string
	MultiAZ                          *bool
	PendingModifiedValues            *ClusterPendingModifiedValues
	PercentProgress                  *string
	Port                             *int64
	PreferredBackupWindow            *string
	PreferredMaintenanceWindow       *string
	ReadReplicaIdentifiers           []map[string]interface{}
	ReaderEndpoint                   *string
	ReplicationSourceIdentifier      *string
	ScalingConfigurationInfo         *ScalingConfigurationInfo
	Status                           *string
	StorageEncrypted                 *bool
	TagList                          []TagList
	VpcSecurityGroups                []VpcSecurityGroupMembershipList
}
