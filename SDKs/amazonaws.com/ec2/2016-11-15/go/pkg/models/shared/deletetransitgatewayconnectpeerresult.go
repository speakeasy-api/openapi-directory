package shared

// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
// The Connect peer details.
type DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration struct {
	BgpConfigurations     map[string]interface{}
	InsideCidrBlocks      map[string]interface{}
	PeerAddress           map[string]interface{}
	Protocol              map[string]interface{}
	TransitGatewayAddress map[string]interface{}
}

// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
// Information about the deleted Connect peer.
type DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer struct {
	ConnectPeerConfiguration    *DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
	CreationTime                map[string]interface{}
	State                       map[string]interface{}
	Tags                        map[string]interface{}
	TransitGatewayAttachmentID  map[string]interface{}
	TransitGatewayConnectPeerID map[string]interface{}
}

type DeleteTransitGatewayConnectPeerResult struct {
	TransitGatewayConnectPeer *DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
}
