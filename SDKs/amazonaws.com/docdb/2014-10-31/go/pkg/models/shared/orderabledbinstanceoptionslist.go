package shared

// OrderableDbInstanceOptionsList
// The options that are available for an instance.
type OrderableDbInstanceOptionsList struct {
	AvailabilityZones []AvailabilityZoneList
	DBInstanceClass   *string
	Engine            *string
	EngineVersion     *string
	LicenseModel      *string
	Vpc               *bool
}
