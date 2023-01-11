package openapisdk.models.shared;



/**
 * AssociateVpcCidrBlockResultCidrBlockAssociation
 * Information about the IPv4 CIDR block association.
**/
public class AssociateVpcCidrBlockResultCidrBlockAssociation {
    public java.util.Map<String, Object> associationId;
    public AssociateVpcCidrBlockResultCidrBlockAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> cidrBlock;
    public AssociateVpcCidrBlockResultCidrBlockAssociation withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState cidrBlockState;
    public AssociateVpcCidrBlockResultCidrBlockAssociation withCidrBlockState(AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState cidrBlockState) {
        this.cidrBlockState = cidrBlockState;
        return this;
    }
}