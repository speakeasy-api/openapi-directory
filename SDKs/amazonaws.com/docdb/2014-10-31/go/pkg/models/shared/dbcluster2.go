package shared

import (
	"time"
)

// DbCluster2
// Detailed information about a cluster.
type DbCluster2 struct {
	AssociatedRoles              map[string]interface{}
	AvailabilityZones            []map[string]interface{}
	BackupRetentionPeriod        *int64
	ClusterCreateTime            *time.Time
	DBClusterArn                 *string
	DBClusterIdentifier          *string
	DBClusterMembers             []map[string]interface{}
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
	VpcSecurityGroups            []map[string]interface{}
}
