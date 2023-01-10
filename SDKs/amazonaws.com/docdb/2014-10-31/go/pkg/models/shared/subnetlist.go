package shared

// SubnetList
//
//	Detailed information about a subnet.
type SubnetList struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetStatus           *string
}
