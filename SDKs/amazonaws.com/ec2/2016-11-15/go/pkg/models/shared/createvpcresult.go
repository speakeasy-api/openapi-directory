package shared

// CreateVpcResultVpc
// Information about the VPC.
type CreateVpcResultVpc struct {
	CidrBlock                   map[string]interface{}
	CidrBlockAssociationSet     map[string]interface{}
	DhcpOptionsID               map[string]interface{}
	InstanceTenancy             map[string]interface{}
	Ipv6CidrBlockAssociationSet map[string]interface{}
	IsDefault                   map[string]interface{}
	OwnerID                     map[string]interface{}
	State                       map[string]interface{}
	Tags                        map[string]interface{}
	VpcID                       map[string]interface{}
}

type CreateVpcResult struct {
	Vpc *CreateVpcResultVpc
}
