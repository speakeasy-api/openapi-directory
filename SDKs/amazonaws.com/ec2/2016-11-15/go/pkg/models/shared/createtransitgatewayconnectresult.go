package shared

// CreateTransitGatewayConnectResultTransitGatewayConnectOptions
// The Connect attachment options.
type CreateTransitGatewayConnectResultTransitGatewayConnectOptions struct {
	Protocol map[string]interface{}
}

// CreateTransitGatewayConnectResultTransitGatewayConnect
// Information about the Connect attachment.
type CreateTransitGatewayConnectResultTransitGatewayConnect struct {
	CreationTime                        map[string]interface{}
	Options                             *CreateTransitGatewayConnectResultTransitGatewayConnectOptions
	State                               map[string]interface{}
	Tags                                map[string]interface{}
	TransitGatewayAttachmentID          map[string]interface{}
	TransitGatewayID                    map[string]interface{}
	TransportTransitGatewayAttachmentID map[string]interface{}
}

type CreateTransitGatewayConnectResult struct {
	TransitGatewayConnect *CreateTransitGatewayConnectResultTransitGatewayConnect
}
