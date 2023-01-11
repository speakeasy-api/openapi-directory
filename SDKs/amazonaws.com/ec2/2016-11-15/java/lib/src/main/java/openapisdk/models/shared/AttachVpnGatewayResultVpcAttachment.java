package openapisdk.models.shared;



/**
 * AttachVpnGatewayResultVpcAttachment
 * Information about the attachment.
**/
public class AttachVpnGatewayResultVpcAttachment {
    public java.util.Map<String, Object> state;
    public AttachVpnGatewayResultVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public AttachVpnGatewayResultVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}