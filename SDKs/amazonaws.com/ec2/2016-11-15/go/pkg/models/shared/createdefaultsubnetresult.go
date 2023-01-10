package shared

// CreateDefaultSubnetResultSubnet
// Information about the subnet.
type CreateDefaultSubnetResultSubnet struct {
	AssignIpv6AddressOnCreation map[string]interface{}
	AvailabilityZone            map[string]interface{}
	AvailabilityZoneID          map[string]interface{}
	AvailableIPAddressCount     map[string]interface{}
	CidrBlock                   map[string]interface{}
	CustomerOwnedIpv4Pool       map[string]interface{}
	DefaultForAz                map[string]interface{}
	Ipv6CidrBlockAssociationSet map[string]interface{}
	MapCustomerOwnedIPOnLaunch  map[string]interface{}
	MapPublicIPOnLaunch         map[string]interface{}
	OutpostArn                  map[string]interface{}
	OwnerID                     map[string]interface{}
	State                       map[string]interface{}
	SubnetArn                   map[string]interface{}
	SubnetID                    map[string]interface{}
	Tags                        map[string]interface{}
	VpcID                       map[string]interface{}
}

type CreateDefaultSubnetResult struct {
	Subnet *CreateDefaultSubnetResultSubnet
}
