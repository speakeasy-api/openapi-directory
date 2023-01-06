package shared

import (
	"time"
)

type DbInstance2 struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CharacterSetName                      *string
	DBInstanceClass                       *string
	DBInstanceIdentifier                  *string
	DBInstanceStatus                      *string
	DBName                                *string
	DBParameterGroups                     []map[string]interface{}
	DBSecurityGroups                      []map[string]interface{}
	DBSubnetGroup                         *DbSubnetGroup1
	Endpoint                              *Endpoint
	Engine                                *string
	EngineVersion                         *string
	InstanceCreateTime                    *time.Time
	Iops                                  *int64
	LatestRestorableTime                  *time.Time
	LicenseModel                          *string
	MasterUsername                        *string
	MultiAZ                               *bool
	OptionGroupMemberships                []map[string]interface{}
	PendingModifiedValues                 *PendingModifiedValues
	PreferredBackupWindow                 *string
	PreferredMaintenanceWindow            *string
	PubliclyAccessible                    *bool
	ReadReplicaDBInstanceIdentifiers      []map[string]interface{}
	ReadReplicaSourceDBInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []map[string]interface{}
	StorageType                           *string
	TdeCredentialArn                      *string
	VpcSecurityGroups                     []VpcSecurityGroupMembershipList
}
