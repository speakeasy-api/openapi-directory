package openapisdk.models.shared;



/**
 * AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
 * Information about the state of the CIDR block.
**/
public class AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState {
    public java.util.Map<String, Object> state;
    public AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}