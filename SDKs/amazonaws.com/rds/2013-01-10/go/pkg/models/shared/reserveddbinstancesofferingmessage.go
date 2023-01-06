package shared

type ReservedDbInstancesOfferingMessage struct {
	Marker                       *string
	ReservedDBInstancesOfferings []map[string]interface{}
}
