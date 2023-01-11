package openapisdk.models.shared;



/**
 * DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
 * Information about the IPv6 CIDR block association.
**/
public class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation {
    public java.util.Map<String, Object> associationId;
    public DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlock;
    public DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlock(java.util.Map<String, Object> ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
    public DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState;
    public DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlockState(DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState) {
        this.ipv6CidrBlockState = ipv6CidrBlockState;
        return this;
    }
}