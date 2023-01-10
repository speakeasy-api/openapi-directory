package shared

import (
	"time"
)

// DbClusterSnapshot
// <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
type DbClusterSnapshot struct {
	AllocatedStorage                 *int64
	AvailabilityZones                []map[string]interface{}
	ClusterCreateTime                *time.Time
	DBClusterIdentifier              *string
	DBClusterSnapshotArn             *string
	DBClusterSnapshotIdentifier      *string
	Engine                           *string
	EngineMode                       *string
	EngineVersion                    *string
	IAMDatabaseAuthenticationEnabled *bool
	KmsKeyID                         *string
	LicenseModel                     *string
	MasterUsername                   *string
	PercentProgress                  *int64
	Port                             *int64
	SnapshotCreateTime               *time.Time
	SnapshotType                     *string
	SourceDBClusterSnapshotArn       *string
	Status                           *string
	StorageEncrypted                 *bool
	TagList                          []TagList
	VpcID                            *string
}
