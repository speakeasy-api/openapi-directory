package shared

import (
	"time"
)

// DbSnapshot1
// <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
type DbSnapshot1 struct {
	AllocatedStorage                 *int64
	AvailabilityZone                 *string
	DBInstanceIdentifier             *string
	DBSnapshotArn                    *string
	DBSnapshotIdentifier             *string
	DbiResourceID                    *string
	Encrypted                        *bool
	Engine                           *string
	EngineVersion                    *string
	IAMDatabaseAuthenticationEnabled *bool
	InstanceCreateTime               *time.Time
	Iops                             *int64
	KmsKeyID                         *string
	LicenseModel                     *string
	MasterUsername                   *string
	OptionGroupName                  *string
	OriginalSnapshotCreateTime       *time.Time
	PercentProgress                  *int64
	Port                             *int64
	ProcessorFeatures                []map[string]interface{}
	SnapshotCreateTime               *time.Time
	SnapshotType                     *string
	SourceDBSnapshotIdentifier       *string
	SourceRegion                     *string
	Status                           *string
	StorageType                      *string
	TagList                          []TagList
	TdeCredentialArn                 *string
	Timezone                         *string
	VpcID                            *string
}
