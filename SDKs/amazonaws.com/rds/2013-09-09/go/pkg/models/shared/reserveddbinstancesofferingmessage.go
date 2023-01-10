package shared

type ReservedDbInstancesOfferingMessage struct {
	Marker                       *string
	ReservedDBInstancesOfferings []ReservedDbInstancesOfferingList
}
