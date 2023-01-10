package shared

// PendingModifiedValues
//
//	This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window.
type PendingModifiedValues struct {
	AllocatedStorage                 *int64
	BackupRetentionPeriod            *int64
	CACertificateIdentifier          *string
	DBInstanceClass                  *string
	DBInstanceIdentifier             *string
	DBSubnetGroupName                *string
	EngineVersion                    *string
	IAMDatabaseAuthenticationEnabled *bool
	Iops                             *int64
	LicenseModel                     *string
	MasterUserPassword               *string
	MultiAZ                          *bool
	PendingCloudwatchLogsExports     *PendingCloudwatchLogsExports
	Port                             *int64
	ProcessorFeatures                []ProcessorFeatureList
	StorageType                      *string
}
