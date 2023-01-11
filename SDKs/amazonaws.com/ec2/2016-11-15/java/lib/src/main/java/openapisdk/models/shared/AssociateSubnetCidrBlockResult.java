package openapisdk.models.shared;



public class AssociateSubnetCidrBlockResult {
    public AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation;
    public AssociateSubnetCidrBlockResult withIpv6CidrBlockAssociation(AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation ipv6CidrBlockAssociation) {
        this.ipv6CidrBlockAssociation = ipv6CidrBlockAssociation;
        return this;
    }
    public java.util.Map<String, Object> subnetId;
    public AssociateSubnetCidrBlockResult withSubnetId(java.util.Map<String, Object> subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}