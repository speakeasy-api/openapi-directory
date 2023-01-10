package shared

// DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation
// Information about the deleted subnet CIDR reservation.
type DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation struct {
	Cidr                    map[string]interface{}
	Description             map[string]interface{}
	OwnerID                 map[string]interface{}
	ReservationType         map[string]interface{}
	SubnetCidrReservationID map[string]interface{}
	SubnetID                map[string]interface{}
	Tags                    map[string]interface{}
}

type DeleteSubnetCidrReservationResult struct {
	DeletedSubnetCidrReservation *DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation
}
