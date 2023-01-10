package shared

// AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
// Information about the state of the CIDR block.
type AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// AssociateVpcCidrBlockResultCidrBlockAssociation
// Information about the IPv4 CIDR block association.
type AssociateVpcCidrBlockResultCidrBlockAssociation struct {
	AssociationID  map[string]interface{}
	CidrBlock      map[string]interface{}
	CidrBlockState *AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
}

// AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
// Information about the state of the CIDR block.
type AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// AssociateVpcCidrBlockResultIpv6CidrBlockAssociation
// Information about the IPv6 CIDR block association.
type AssociateVpcCidrBlockResultIpv6CidrBlockAssociation struct {
	AssociationID      map[string]interface{}
	Ipv6CidrBlock      map[string]interface{}
	Ipv6CidrBlockState *AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
	Ipv6Pool           map[string]interface{}
	NetworkBorderGroup map[string]interface{}
}

type AssociateVpcCidrBlockResult struct {
	CidrBlockAssociation     *AssociateVpcCidrBlockResultCidrBlockAssociation
	Ipv6CidrBlockAssociation *AssociateVpcCidrBlockResultIpv6CidrBlockAssociation
	VpcID                    map[string]interface{}
}
