package shared

import (
	"time"
)

// DbInstance2
// <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
type DbInstance2 struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CACertificateIdentifier               *string
	CharacterSetName                      *string
	CopyTagsToSnapshot                    *bool
	DBClusterIdentifier                   *string
	DBInstanceArn                         *string
	DBInstanceClass                       *string
	DBInstanceIdentifier                  *string
	DBInstanceStatus                      *string
	DBName                                *string
	DBParameterGroups                     []map[string]interface{}
	DBSecurityGroups                      []map[string]interface{}
	DBSubnetGroup                         *DbSubnetGroup
	DbInstancePort                        *int64
	DbiResourceID                         *string
	DeletionProtection                    *bool
	DomainMemberships                     []map[string]interface{}
	EnabledCloudwatchLogsExports          []string
	Endpoint                              *Endpoint
	Engine                                *string
	EngineVersion                         *string
	EnhancedMonitoringResourceArn         *string
	IAMDatabaseAuthenticationEnabled      *bool
	InstanceCreateTime                    *time.Time
	Iops                                  *int64
	KmsKeyID                              *string
	LatestRestorableTime                  *time.Time
	LicenseModel                          map[string]interface{}
	MasterUsername                        *string
	MonitoringInterval                    *int64
	MonitoringRoleArn                     *string
	MultiAZ                               *bool
	OptionGroupMemberships                []map[string]interface{}
	PendingModifiedValues                 *PendingModifiedValues
	PerformanceInsightsEnabled            *bool
	PerformanceInsightsKMSKeyID           *string
	PreferredBackupWindow                 *string
	PreferredMaintenanceWindow            *string
	PromotionTier                         *int64
	PubliclyAccessible                    map[string]interface{}
	ReadReplicaDBClusterIdentifiers       []map[string]interface{}
	ReadReplicaDBInstanceIdentifiers      []map[string]interface{}
	ReadReplicaSourceDBInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []map[string]interface{}
	StorageEncrypted                      *bool
	StorageType                           *string
	TdeCredentialArn                      *string
	Timezone                              *string
	VpcSecurityGroups                     []VpcSecurityGroupMembershipList1
}
