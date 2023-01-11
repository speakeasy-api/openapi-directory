package openapisdk.models.shared;



/**
 * DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
 * Information about the state of the CIDR block.
**/
public class DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState {
    public java.util.Map<String, Object> state;
    public DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}