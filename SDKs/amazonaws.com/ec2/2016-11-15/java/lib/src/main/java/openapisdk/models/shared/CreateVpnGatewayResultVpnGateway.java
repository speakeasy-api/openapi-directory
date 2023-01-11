package openapisdk.models.shared;



/**
 * CreateVpnGatewayResultVpnGateway
 * Information about the virtual private gateway.
**/
public class CreateVpnGatewayResultVpnGateway {
    public java.util.Map<String, Object> amazonSideAsn;
    public CreateVpnGatewayResultVpnGateway withAmazonSideAsn(java.util.Map<String, Object> amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    public java.util.Map<String, Object> availabilityZone;
    public CreateVpnGatewayResultVpnGateway withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateVpnGatewayResultVpnGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpnGatewayResultVpnGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateVpnGatewayResultVpnGateway withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vpcAttachments;
    public CreateVpnGatewayResultVpnGateway withVpcAttachments(java.util.Map<String, Object> vpcAttachments) {
        this.vpcAttachments = vpcAttachments;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public CreateVpnGatewayResultVpnGateway withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}