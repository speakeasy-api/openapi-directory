package openapisdk.models.shared;



/**
 * CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer
 * Information about the Connect peer.
**/
public class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer {
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration connectPeerConfiguration;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withConnectPeerConfiguration(CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration connectPeerConfiguration) {
        this.connectPeerConfiguration = connectPeerConfiguration;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayConnectPeerId;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTransitGatewayConnectPeerId(java.util.Map<String, Object> transitGatewayConnectPeerId) {
        this.transitGatewayConnectPeerId = transitGatewayConnectPeerId;
        return this;
    }
}