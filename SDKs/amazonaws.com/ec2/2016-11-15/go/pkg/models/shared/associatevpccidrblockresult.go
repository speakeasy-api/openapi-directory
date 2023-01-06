package shared

type AssociateVpcCidrBlockResult struct {
	CidrBlockAssociation     map[string]interface{}
	Ipv6CidrBlockAssociation map[string]interface{}
	VpcID                    map[string]interface{}
}
