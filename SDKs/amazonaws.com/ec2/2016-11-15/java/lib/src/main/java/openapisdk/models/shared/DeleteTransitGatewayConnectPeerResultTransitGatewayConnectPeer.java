package openapisdk.models.shared;



/**
 * DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
 * Information about the deleted Connect peer.
**/
public class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer {
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration connectPeerConfiguration;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withConnectPeerConfiguration(DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration connectPeerConfiguration) {
        this.connectPeerConfiguration = connectPeerConfiguration;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayConnectPeerId;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer withTransitGatewayConnectPeerId(java.util.Map<String, Object> transitGatewayConnectPeerId) {
        this.transitGatewayConnectPeerId = transitGatewayConnectPeerId;
        return this;
    }
}