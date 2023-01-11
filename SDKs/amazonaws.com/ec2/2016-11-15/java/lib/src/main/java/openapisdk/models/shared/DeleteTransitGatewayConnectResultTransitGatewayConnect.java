package openapisdk.models.shared;



/**
 * DeleteTransitGatewayConnectResultTransitGatewayConnect
 * Information about the deleted Connect attachment.
**/
public class DeleteTransitGatewayConnectResultTransitGatewayConnect {
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public DeleteTransitGatewayConnectResultTransitGatewayConnectOptions options;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withOptions(DeleteTransitGatewayConnectResultTransitGatewayConnectOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> transportTransitGatewayAttachmentId;
    public DeleteTransitGatewayConnectResultTransitGatewayConnect withTransportTransitGatewayAttachmentId(java.util.Map<String, Object> transportTransitGatewayAttachmentId) {
        this.transportTransitGatewayAttachmentId = transportTransitGatewayAttachmentId;
        return this;
    }
}