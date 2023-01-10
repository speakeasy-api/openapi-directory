package shared

// CreateNatGatewayResultNatGatewayProvisionedBandwidth
// Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
type CreateNatGatewayResultNatGatewayProvisionedBandwidth struct {
	ProvisionTime map[string]interface{}
	Provisioned   map[string]interface{}
	RequestTime   map[string]interface{}
	Requested     map[string]interface{}
	Status        map[string]interface{}
}

// CreateNatGatewayResultNatGateway
// Information about the NAT gateway.
type CreateNatGatewayResultNatGateway struct {
	ConnectivityType     map[string]interface{}
	CreateTime           map[string]interface{}
	DeleteTime           map[string]interface{}
	FailureCode          map[string]interface{}
	FailureMessage       map[string]interface{}
	NatGatewayAddresses  map[string]interface{}
	NatGatewayID         map[string]interface{}
	ProvisionedBandwidth *CreateNatGatewayResultNatGatewayProvisionedBandwidth
	State                map[string]interface{}
	SubnetID             map[string]interface{}
	Tags                 map[string]interface{}
	VpcID                map[string]interface{}
}

type CreateNatGatewayResult struct {
	ClientToken map[string]interface{}
	NatGateway  *CreateNatGatewayResultNatGateway
}
