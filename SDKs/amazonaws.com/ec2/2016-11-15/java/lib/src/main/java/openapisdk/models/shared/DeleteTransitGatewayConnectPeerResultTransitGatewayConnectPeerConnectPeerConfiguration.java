package openapisdk.models.shared;



/**
 * DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
 * The Connect peer details.
**/
public class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration {
    public java.util.Map<String, Object> bgpConfigurations;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withBgpConfigurations(java.util.Map<String, Object> bgpConfigurations) {
        this.bgpConfigurations = bgpConfigurations;
        return this;
    }
    public java.util.Map<String, Object> insideCidrBlocks;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withInsideCidrBlocks(java.util.Map<String, Object> insideCidrBlocks) {
        this.insideCidrBlocks = insideCidrBlocks;
        return this;
    }
    public java.util.Map<String, Object> peerAddress;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withPeerAddress(java.util.Map<String, Object> peerAddress) {
        this.peerAddress = peerAddress;
        return this;
    }
    public java.util.Map<String, Object> protocol;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withProtocol(java.util.Map<String, Object> protocol) {
        this.protocol = protocol;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAddress;
    public DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withTransitGatewayAddress(java.util.Map<String, Object> transitGatewayAddress) {
        this.transitGatewayAddress = transitGatewayAddress;
        return this;
    }
}