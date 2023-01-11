package openapisdk.models.shared;



/**
 * DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation
 * Information about the IPv6 CIDR block association.
**/
public class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation {
    public java.util.Map<String, Object> associationId;
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlock;
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlock(java.util.Map<String, Object> ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState;
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation withIpv6CidrBlockState(DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState ipv6CidrBlockState) {
        this.ipv6CidrBlockState = ipv6CidrBlockState;
        return this;
    }
    public java.util.Map<String, Object> ipv6Pool;
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation withIpv6Pool(java.util.Map<String, Object> ipv6Pool) {
        this.ipv6Pool = ipv6Pool;
        return this;
    }
    public java.util.Map<String, Object> networkBorderGroup;
    public DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation withNetworkBorderGroup(java.util.Map<String, Object> networkBorderGroup) {
        this.networkBorderGroup = networkBorderGroup;
        return this;
    }
}