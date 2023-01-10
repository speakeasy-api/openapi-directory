package shared

// OrderableDbInstanceOptionsList
// <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
type OrderableDbInstanceOptionsList struct {
	AvailabilityZoneGroup             *string
	AvailabilityZones                 []AvailabilityZoneList
	AvailableProcessorFeatures        []AvailableProcessorFeatureList
	DBInstanceClass                   *string
	Engine                            *string
	EngineVersion                     *string
	LicenseModel                      *string
	MaxIopsPerDbInstance              *int64
	MaxIopsPerGib                     *float64
	MaxStorageSize                    *int64
	MinIopsPerDbInstance              *int64
	MinIopsPerGib                     *float64
	MinStorageSize                    *int64
	MultiAZCapable                    *bool
	OutpostCapable                    *bool
	ReadReplicaCapable                *bool
	StorageType                       *string
	SupportedActivityStreamModes      []string
	SupportedEngineModes              []string
	SupportsEnhancedMonitoring        *bool
	SupportsGlobalDatabases           *bool
	SupportsIAMDatabaseAuthentication *bool
	SupportsIops                      *bool
	SupportsKerberosAuthentication    *bool
	SupportsPerformanceInsights       *bool
	SupportsStorageAutoscaling        *bool
	SupportsStorageEncryption         *bool
	Vpc                               *bool
}
