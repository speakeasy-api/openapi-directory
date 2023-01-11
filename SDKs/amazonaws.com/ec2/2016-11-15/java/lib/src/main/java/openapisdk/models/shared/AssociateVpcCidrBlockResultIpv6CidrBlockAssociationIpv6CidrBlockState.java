package openapisdk.models.shared;



/**
 * AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
 * Information about the state of the CIDR block.
**/
public class AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState {
    public java.util.Map<String, Object> state;
    public AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}