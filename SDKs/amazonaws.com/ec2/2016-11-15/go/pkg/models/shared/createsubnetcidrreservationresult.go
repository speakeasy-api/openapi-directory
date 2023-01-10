package shared

// CreateSubnetCidrReservationResultSubnetCidrReservation
// Information about the created subnet CIDR reservation.
type CreateSubnetCidrReservationResultSubnetCidrReservation struct {
	Cidr                    map[string]interface{}
	Description             map[string]interface{}
	OwnerID                 map[string]interface{}
	ReservationType         map[string]interface{}
	SubnetCidrReservationID map[string]interface{}
	SubnetID                map[string]interface{}
	Tags                    map[string]interface{}
}

type CreateSubnetCidrReservationResult struct {
	SubnetCidrReservation *CreateSubnetCidrReservationResultSubnetCidrReservation
}
