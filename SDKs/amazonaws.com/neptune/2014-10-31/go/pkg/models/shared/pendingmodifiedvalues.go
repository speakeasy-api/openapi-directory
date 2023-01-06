package shared

// PendingModifiedValues
//
//	This data type is used as a response element in the <a>ModifyDBInstance</a> action.
type PendingModifiedValues struct {
	AllocatedStorage             *int64
	BackupRetentionPeriod        *int64
	CACertificateIdentifier      *string
	DBInstanceClass              *string
	DBInstanceIdentifier         *string
	DBSubnetGroupName            *string
	EngineVersion                *string
	Iops                         *int64
	LicenseModel                 *string
	MasterUserPassword           *string
	MultiAZ                      *bool
	PendingCloudwatchLogsExports *PendingCloudwatchLogsExports
	Port                         *int64
	StorageType                  *string
}
