package shared

// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
// Information about the accepter transit gateway.
type DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
// Information about the requester transit gateway.
type DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
// The status of the transit gateway peering attachment.
type DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
// The transit gateway peering attachment.
type DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment struct {
	AccepterTgwInfo            *DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
	CreationTime               map[string]interface{}
	RequesterTgwInfo           *DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
	State                      map[string]interface{}
	Status                     *DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

type DeleteTransitGatewayPeeringAttachmentResult struct {
	TransitGatewayPeeringAttachment *DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
}
