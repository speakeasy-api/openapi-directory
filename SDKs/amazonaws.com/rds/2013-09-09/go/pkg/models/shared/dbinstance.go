// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

type DBInstance struct {
	AllocatedStorage                      *int64
	AutoMinorVersionUpgrade               *bool
	AvailabilityZone                      *string
	BackupRetentionPeriod                 *int64
	CharacterSetName                      *string
	DBInstanceClass                       *string
	DBInstanceIdentifier                  *string
	DBInstanceStatus                      *string
	DBName                                *string
	DBParameterGroups                     []DBParameterGroupStatusList
	DBSecurityGroups                      []DBSecurityGroupMembershipList
	DBSubnetGroup                         *DBSubnetGroup
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
	ReadReplicaDBInstanceIdentifiers      []string
	ReadReplicaSourceDBInstanceIdentifier *string
	SecondaryAvailabilityZone             *string
	StatusInfos                           []DBInstanceStatusInfoList
	VpcSecurityGroups                     []VpcSecurityGroupMembershipList
}
