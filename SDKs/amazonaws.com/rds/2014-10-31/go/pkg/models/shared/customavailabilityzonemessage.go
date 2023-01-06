package shared

type CustomAvailabilityZoneMessage struct {
	CustomAvailabilityZones []map[string]interface{}
	Marker                  *string
}
