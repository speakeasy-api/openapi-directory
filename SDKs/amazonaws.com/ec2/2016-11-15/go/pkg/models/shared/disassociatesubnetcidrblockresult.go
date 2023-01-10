package shared

// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
// Information about the state of the CIDR block.
type DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
// Information about the IPv6 CIDR block association.
type DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation struct {
	AssociationID      map[string]interface{}
	Ipv6CidrBlock      map[string]interface{}
	Ipv6CidrBlockState *DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
}

type DisassociateSubnetCidrBlockResult struct {
	Ipv6CidrBlockAssociation *DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
	SubnetID                 map[string]interface{}
}
