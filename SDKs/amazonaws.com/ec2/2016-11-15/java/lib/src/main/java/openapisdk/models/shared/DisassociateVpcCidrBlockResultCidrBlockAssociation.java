package openapisdk.models.shared;



/**
 * DisassociateVpcCidrBlockResultCidrBlockAssociation
 * Information about the IPv4 CIDR block association.
**/
public class DisassociateVpcCidrBlockResultCidrBlockAssociation {
    public java.util.Map<String, Object> associationId;
    public DisassociateVpcCidrBlockResultCidrBlockAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> cidrBlock;
    public DisassociateVpcCidrBlockResultCidrBlockAssociation withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState cidrBlockState;
    public DisassociateVpcCidrBlockResultCidrBlockAssociation withCidrBlockState(DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState cidrBlockState) {
        this.cidrBlockState = cidrBlockState;
        return this;
    }
}