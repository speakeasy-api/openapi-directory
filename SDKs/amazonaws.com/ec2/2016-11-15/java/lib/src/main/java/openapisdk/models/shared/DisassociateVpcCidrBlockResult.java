package openapisdk.models.shared;



public class DisassociateVpcCidrBlockResult {
    public DisassociateVpcCidrBlockResultCidrBlockAssociation cidrBlockAssociation;
    public DisassociateVpcCidrBlockResult withCidrBlockAssociation(DisassociateVpcCidrBlockResultCidrBlockAssociation cidrBlockAssociation) {
        this.cidrBlockAssociation = cidrBlockAssociation;
        return this;
    }
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation;
    public DisassociateVpcCidrBlockResult withIpv6CidrBlockAssociation(DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation) {
        this.ipv6CidrBlockAssociation = ipv6CidrBlockAssociation;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public DisassociateVpcCidrBlockResult withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}