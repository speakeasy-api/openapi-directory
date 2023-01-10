package shared

// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
// Information about the accepter transit gateway.
type CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
// Information about the requester transit gateway.
type CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
// The status of the transit gateway peering attachment.
type CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
// The transit gateway peering attachment.
type CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment struct {
	AccepterTgwInfo            *CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
	CreationTime               map[string]interface{}
	RequesterTgwInfo           *CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
	State                      map[string]interface{}
	Status                     *CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

type CreateTransitGatewayPeeringAttachmentResult struct {
	TransitGatewayPeeringAttachment *CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
}
