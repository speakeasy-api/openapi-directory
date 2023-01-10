package shared

// OrderableDbInstanceOptionsList
// <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
type OrderableDbInstanceOptionsList struct {
	AvailabilityZones                 []AvailabilityZoneList
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
	ReadReplicaCapable                *bool
	StorageType                       *string
	SupportsEnhancedMonitoring        *bool
	SupportsIAMDatabaseAuthentication *bool
	SupportsIops                      *bool
	SupportsPerformanceInsights       *bool
	SupportsStorageEncryption         *bool
	Vpc                               *bool
}
