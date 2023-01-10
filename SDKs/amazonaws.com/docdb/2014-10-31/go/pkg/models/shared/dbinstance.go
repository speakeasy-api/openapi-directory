package shared

import (
	"time"
)

// DbInstance
// Detailed information about an instance.
type DbInstance struct {
	AutoMinorVersionUpgrade      *bool
	AvailabilityZone             *string
	BackupRetentionPeriod        *int64
	CACertificateIdentifier      *string
	DBClusterIdentifier          *string
	DBInstanceArn                *string
	DBInstanceClass              *string
	DBInstanceIdentifier         *string
	DBInstanceStatus             *string
	DBSubnetGroup                *DbSubnetGroup
	DbiResourceID                *string
	EnabledCloudwatchLogsExports []string
	Endpoint                     *Endpoint
	Engine                       *string
	EngineVersion                *string
	InstanceCreateTime           *time.Time
	KmsKeyID                     *string
	LatestRestorableTime         *time.Time
	PendingModifiedValues        *PendingModifiedValues
	PreferredBackupWindow        *string
	PreferredMaintenanceWindow   *string
	PromotionTier                *int64
	PubliclyAccessible           *bool
	StatusInfos                  []DbInstanceStatusInfoList
	StorageEncrypted             *bool
	VpcSecurityGroups            []VpcSecurityGroupMembershipList
}
