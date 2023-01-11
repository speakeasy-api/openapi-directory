package openapisdk.models.shared;



public class AssociateVpcCidrBlockResult {
    public AssociateVpcCidrBlockResultCidrBlockAssociation cidrBlockAssociation;
    public AssociateVpcCidrBlockResult withCidrBlockAssociation(AssociateVpcCidrBlockResultCidrBlockAssociation cidrBlockAssociation) {
        this.cidrBlockAssociation = cidrBlockAssociation;
        return this;
    }
    public AssociateVpcCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation;
    public AssociateVpcCidrBlockResult withIpv6CidrBlockAssociation(AssociateVpcCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation) {
        this.ipv6CidrBlockAssociation = ipv6CidrBlockAssociation;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public AssociateVpcCidrBlockResult withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}