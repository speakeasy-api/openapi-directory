package openapisdk.models.shared;



public class DisassociateSubnetCidrBlockResult {
    public DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation;
    public DisassociateSubnetCidrBlockResult withIpv6CidrBlockAssociation(DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation) {
        this.ipv6CidrBlockAssociation = ipv6CidrBlockAssociation;
        return this;
    }
    public java.util.Map<String, Object> subnetId;
    public DisassociateSubnetCidrBlockResult withSubnetId(java.util.Map<String, Object> subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}