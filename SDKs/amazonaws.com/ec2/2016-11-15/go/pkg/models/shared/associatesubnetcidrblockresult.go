package shared

// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
// Information about the state of the CIDR block.
type AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation
// Information about the IPv6 CIDR block association.
type AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation struct {
	AssociationID      map[string]interface{}
	Ipv6CidrBlock      map[string]interface{}
	Ipv6CidrBlockState *AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
}

type AssociateSubnetCidrBlockResult struct {
	Ipv6CidrBlockAssociation *AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation
	SubnetID                 map[string]interface{}
}
