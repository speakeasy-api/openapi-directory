package shared

import (
	"time"
)

// DbCluster
// Detailed information about a cluster.
type DbCluster struct {
	AssociatedRoles              []DbClusterRoles
	AvailabilityZones            []map[string]interface{}
	BackupRetentionPeriod        *int64
	ClusterCreateTime            *time.Time
	DBClusterArn                 *string
	DBClusterIdentifier          *string
	DBClusterMembers             []DbClusterMemberList
	DBClusterParameterGroup      *string
	DBSubnetGroup                *string
	DbClusterResourceID          *string
	DeletionProtection           *bool
	EarliestRestorableTime       *time.Time
	EnabledCloudwatchLogsExports []string
	Endpoint                     *string
	Engine                       *string
	EngineVersion                *string
	HostedZoneID                 *string
	KmsKeyID                     *string
	LatestRestorableTime         *time.Time
	MasterUsername               *string
	MultiAZ                      *bool
	PercentProgress              *string
	Port                         *int64
	PreferredBackupWindow        *string
	PreferredMaintenanceWindow   *string
	ReadReplicaIdentifiers       []map[string]interface{}
	ReaderEndpoint               *string
	ReplicationSourceIdentifier  *string
	Status                       *string
	StorageEncrypted             *bool
	VpcSecurityGroups            []VpcSecurityGroupMembershipList
}
