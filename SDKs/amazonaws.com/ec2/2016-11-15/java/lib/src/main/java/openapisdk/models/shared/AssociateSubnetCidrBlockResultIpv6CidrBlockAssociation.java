package openapisdk.models.shared;



/**
 * AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation
 * Information about the IPv6 CIDR block association.
**/
public class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation {
    public java.util.Map<String, Object> associationId;
    public AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlock;
    public AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlock(java.util.Map<String, Object> ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
    public AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState;
    public AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlockState(AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState) {
        this.ipv6CidrBlockState = ipv6CidrBlockState;
        return this;
    }
}