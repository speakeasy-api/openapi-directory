package openapisdk.models.shared;



/**
 * CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
 * The Connect peer details.
**/
public class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration {
    public java.util.Map<String, Object> bgpConfigurations;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withBgpConfigurations(java.util.Map<String, Object> bgpConfigurations) {
        this.bgpConfigurations = bgpConfigurations;
        return this;
    }
    public java.util.Map<String, Object> insideCidrBlocks;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withInsideCidrBlocks(java.util.Map<String, Object> insideCidrBlocks) {
        this.insideCidrBlocks = insideCidrBlocks;
        return this;
    }
    public java.util.Map<String, Object> peerAddress;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withPeerAddress(java.util.Map<String, Object> peerAddress) {
        this.peerAddress = peerAddress;
        return this;
    }
    public java.util.Map<String, Object> protocol;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withProtocol(java.util.Map<String, Object> protocol) {
        this.protocol = protocol;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAddress;
    public CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration withTransitGatewayAddress(java.util.Map<String, Object> transitGatewayAddress) {
        this.transitGatewayAddress = transitGatewayAddress;
        return this;
    }
}