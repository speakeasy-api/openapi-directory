package openapisdk.models.shared;



/**
 * AttachVpnGatewayResult
 * Contains the output of AttachVpnGateway.
**/
public class AttachVpnGatewayResult {
    public AttachVpnGatewayResultVpcAttachment vpcAttachment;
    public AttachVpnGatewayResult withVpcAttachment(AttachVpnGatewayResultVpcAttachment vpcAttachment) {
        this.vpcAttachment = vpcAttachment;
        return this;
    }
}