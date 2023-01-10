package shared

type OrderableDbInstanceOptionsList struct {
	AvailabilityZones  []AvailabilityZoneList
	DBInstanceClass    *string
	Engine             *string
	EngineVersion      *string
	LicenseModel       *string
	MultiAZCapable     *bool
	ReadReplicaCapable *bool
	StorageType        *string
	SupportsIops       *bool
	Vpc                *bool
}
