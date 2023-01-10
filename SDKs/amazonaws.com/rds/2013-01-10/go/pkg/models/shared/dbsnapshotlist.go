package shared

import (
	"time"
)

type DbSnapshotList struct {
	AllocatedStorage     *int64
	AvailabilityZone     *string
	DBInstanceIdentifier *string
	DBSnapshotIdentifier *string
	Engine               *string
	EngineVersion        *string
	InstanceCreateTime   *time.Time
	Iops                 *int64
	LicenseModel         *string
	MasterUsername       *string
	Port                 *int64
	SnapshotCreateTime   *time.Time
	SnapshotType         *string
	Status               *string
	VpcID                *string
}
