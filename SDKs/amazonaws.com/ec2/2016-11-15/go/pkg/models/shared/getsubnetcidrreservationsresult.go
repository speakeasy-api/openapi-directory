package shared

type GetSubnetCidrReservationsResult struct {
	NextToken                  map[string]interface{}
	SubnetIpv4CidrReservations map[string]interface{}
	SubnetIpv6CidrReservations map[string]interface{}
}
