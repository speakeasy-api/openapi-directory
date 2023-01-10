package shared

// CreateTransitGatewayResultTransitGatewayOptions
// The transit gateway options.
type CreateTransitGatewayResultTransitGatewayOptions struct {
	AmazonSideAsn                  map[string]interface{}
	AssociationDefaultRouteTableID map[string]interface{}
	AutoAcceptSharedAttachments    map[string]interface{}
	DefaultRouteTableAssociation   map[string]interface{}
	DefaultRouteTablePropagation   map[string]interface{}
	DNSSupport                     map[string]interface{}
	MulticastSupport               map[string]interface{}
	PropagationDefaultRouteTableID map[string]interface{}
	TransitGatewayCidrBlocks       map[string]interface{}
	VpnEcmpSupport                 map[string]interface{}
}

// CreateTransitGatewayResultTransitGateway
// Information about the transit gateway.
type CreateTransitGatewayResultTransitGateway struct {
	CreationTime      map[string]interface{}
	Description       map[string]interface{}
	Options           *CreateTransitGatewayResultTransitGatewayOptions
	OwnerID           map[string]interface{}
	State             map[string]interface{}
	Tags              map[string]interface{}
	TransitGatewayArn map[string]interface{}
	TransitGatewayID  map[string]interface{}
}

type CreateTransitGatewayResult struct {
	TransitGateway *CreateTransitGatewayResultTransitGateway
}
