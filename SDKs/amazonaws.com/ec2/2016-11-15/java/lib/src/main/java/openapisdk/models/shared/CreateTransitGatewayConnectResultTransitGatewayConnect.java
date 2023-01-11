package openapisdk.models.shared;



/**
 * CreateTransitGatewayConnectResultTransitGatewayConnect
 * Information about the Connect attachment.
**/
public class CreateTransitGatewayConnectResultTransitGatewayConnect {
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public CreateTransitGatewayConnectResultTransitGatewayConnectOptions options;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withOptions(CreateTransitGatewayConnectResultTransitGatewayConnectOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> transportTransitGatewayAttachmentId;
    public CreateTransitGatewayConnectResultTransitGatewayConnect withTransportTransitGatewayAttachmentId(java.util.Map<String, Object> transportTransitGatewayAttachmentId) {
        this.transportTransitGatewayAttachmentId = transportTransitGatewayAttachmentId;
        return this;
    }
}