package shared

import (
	"time"
)

// DbClusterSnapshotList
// Detailed information about a cluster snapshot.
type DbClusterSnapshotList struct {
	AvailabilityZones           []map[string]interface{}
	ClusterCreateTime           *time.Time
	DBClusterIdentifier         *string
	DBClusterSnapshotArn        *string
	DBClusterSnapshotIdentifier *string
	Engine                      *string
	EngineVersion               *string
	KmsKeyID                    *string
	MasterUsername              *string
	PercentProgress             *int64
	Port                        *int64
	SnapshotCreateTime          *time.Time
	SnapshotType                *string
	SourceDBClusterSnapshotArn  *string
	Status                      *string
	StorageEncrypted            *bool
	VpcID                       *string
}
