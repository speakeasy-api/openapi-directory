package shared

type PendingModifiedValues struct {
	AllocatedStorage      *int64
	BackupRetentionPeriod *int64
	DBInstanceClass       *string
	DBInstanceIdentifier  *string
	EngineVersion         *string
	Iops                  *int64
	MasterUserPassword    *string
	MultiAZ               *bool
	Port                  *int64
}
