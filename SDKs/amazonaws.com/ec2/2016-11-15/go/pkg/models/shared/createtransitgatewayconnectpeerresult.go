package shared

// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
// The Connect peer details.
type CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration struct {
	BgpConfigurations     map[string]interface{}
	InsideCidrBlocks      map[string]interface{}
	PeerAddress           map[string]interface{}
	Protocol              map[string]interface{}
	TransitGatewayAddress map[string]interface{}
}

// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer
// Information about the Connect peer.
type CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer struct {
	ConnectPeerConfiguration    *CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
	CreationTime                map[string]interface{}
	State                       map[string]interface{}
	Tags                        map[string]interface{}
	TransitGatewayAttachmentID  map[string]interface{}
	TransitGatewayConnectPeerID map[string]interface{}
}

type CreateTransitGatewayConnectPeerResult struct {
	TransitGatewayConnectPeer *CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer
}
