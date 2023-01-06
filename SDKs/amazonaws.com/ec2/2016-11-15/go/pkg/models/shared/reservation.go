package shared

// Reservation
// Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
type Reservation struct {
	Groups        map[string]interface{}
	Instances     map[string]interface{}
	OwnerID       map[string]interface{}
	RequesterID   map[string]interface{}
	ReservationID map[string]interface{}
}
