package shared

import (
	"time"
)

type DbInstanceList struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CharacterSetName                      *string
	DBInstanceClass                       *string
	DBInstanceIdentifier                  *string
	DBInstanceStatus                      *string
	DBName                                *string
	DBParameterGroups                     []DbParameterGroupStatusList
	DBSecurityGroups                      []DbSecurityGroupMembershipList
	DBSubnetGroup                         *DbSubnetGroup
	Endpoint                              *Endpoint
	Engine                                *string
	EngineVersion                         *string
	InstanceCreateTime                    *time.Time
	Iops                                  *int64
	LatestRestorableTime                  *time.Time
	LicenseModel                          *string
	MasterUsername                        *string
	MultiAZ                               *bool
	OptionGroupMemberships                []OptionGroupMembershipList
	PendingModifiedValues                 *PendingModifiedValues
	PreferredBackupWindow                 *string
	PreferredMaintenanceWindow            *string
	PubliclyAccessible                    *bool
	ReadReplicaDBInstanceIdentifiers      []map[string]interface{}
	ReadReplicaSourceDBInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []DbInstanceStatusInfoList
	VpcSecurityGroups                     []VpcSecurityGroupMembershipList
}
