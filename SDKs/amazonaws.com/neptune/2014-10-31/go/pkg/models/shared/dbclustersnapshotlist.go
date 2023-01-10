package shared

import (
	"time"
)

// DbClusterSnapshotList
// <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
type DbClusterSnapshotList struct {
	AllocatedStorage                 *int64
	AvailabilityZones                []map[string]interface{}
	ClusterCreateTime                *time.Time
	DBClusterIdentifier              *string
	DBClusterSnapshotArn             *string
	DBClusterSnapshotIdentifier      *string
	Engine                           *string
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
	VpcID                            *string
}
