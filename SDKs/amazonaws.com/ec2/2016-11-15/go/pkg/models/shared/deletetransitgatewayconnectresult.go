package shared

// DeleteTransitGatewayConnectResultTransitGatewayConnectOptions
// The Connect attachment options.
type DeleteTransitGatewayConnectResultTransitGatewayConnectOptions struct {
	Protocol map[string]interface{}
}

// DeleteTransitGatewayConnectResultTransitGatewayConnect
// Information about the deleted Connect attachment.
type DeleteTransitGatewayConnectResultTransitGatewayConnect struct {
	CreationTime                        map[string]interface{}
	Options                             *DeleteTransitGatewayConnectResultTransitGatewayConnectOptions
	State                               map[string]interface{}
	Tags                                map[string]interface{}
	TransitGatewayAttachmentID          map[string]interface{}
	TransitGatewayID                    map[string]interface{}
	TransportTransitGatewayAttachmentID map[string]interface{}
}

type DeleteTransitGatewayConnectResult struct {
	TransitGatewayConnect *DeleteTransitGatewayConnectResultTransitGatewayConnect
}
