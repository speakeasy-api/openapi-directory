package shared

// SubnetList
// Describes a subnet.
type SubnetList struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetStatus           *string
}
