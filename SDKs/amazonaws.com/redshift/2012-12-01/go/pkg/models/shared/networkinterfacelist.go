package shared

// NetworkInterfaceList
// Describes a network interface.
type NetworkInterfaceList struct {
	AvailabilityZone   *string
	NetworkInterfaceID *string
	PrivateIPAddress   *string
	SubnetID           *string
}
