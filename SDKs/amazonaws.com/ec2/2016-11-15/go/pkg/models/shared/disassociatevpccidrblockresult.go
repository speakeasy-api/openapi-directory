package shared

// DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
// Information about the state of the CIDR block.
type DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// DisassociateVpcCidrBlockResultCidrBlockAssociation
// Information about the IPv4 CIDR block association.
type DisassociateVpcCidrBlockResultCidrBlockAssociation struct {
	AssociationID  map[string]interface{}
	CidrBlock      map[string]interface{}
	CidrBlockState *DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
}

// DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
// Information about the state of the CIDR block.
type DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation
// Information about the IPv6 CIDR block association.
type DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation struct {
	AssociationID      map[string]interface{}
	Ipv6CidrBlock      map[string]interface{}
	Ipv6CidrBlockState *DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
	Ipv6Pool           map[string]interface{}
	NetworkBorderGroup map[string]interface{}
}

type DisassociateVpcCidrBlockResult struct {
	CidrBlockAssociation     *DisassociateVpcCidrBlockResultCidrBlockAssociation
	Ipv6CidrBlockAssociation *DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation
	VpcID                    map[string]interface{}
}
