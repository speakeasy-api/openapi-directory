package shared

// CreateCapacityReservationResultCapacityReservation
// Information about the Capacity Reservation.
type CreateCapacityReservationResultCapacityReservation struct {
	AvailabilityZone       map[string]interface{}
	AvailabilityZoneID     map[string]interface{}
	AvailableInstanceCount map[string]interface{}
	CapacityReservationArn map[string]interface{}
	CapacityReservationID  map[string]interface{}
	CreateDate             map[string]interface{}
	EbsOptimized           map[string]interface{}
	EndDate                map[string]interface{}
	EndDateType            map[string]interface{}
	EphemeralStorage       map[string]interface{}
	InstanceMatchCriteria  map[string]interface{}
	InstancePlatform       map[string]interface{}
	InstanceType           map[string]interface{}
	OutpostArn             map[string]interface{}
	OwnerID                map[string]interface{}
	StartDate              map[string]interface{}
	State                  map[string]interface{}
	Tags                   map[string]interface{}
	Tenancy                map[string]interface{}
	TotalInstanceCount     map[string]interface{}
}

type CreateCapacityReservationResult struct {
	CapacityReservation *CreateCapacityReservationResultCapacityReservation
}
