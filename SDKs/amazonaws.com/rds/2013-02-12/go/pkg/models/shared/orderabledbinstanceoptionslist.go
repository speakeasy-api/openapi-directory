package shared

type OrderableDbInstanceOptionsList struct {
	AvailabilityZones  []AvailabilityZoneList
	DBInstanceClass    *string
	Engine             *string
	EngineVersion      *string
	LicenseModel       *string
	MultiAZCapable     *bool
	ReadReplicaCapable *bool
	Vpc                *bool
}
