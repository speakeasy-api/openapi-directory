package shared

// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
// Information about the accepter transit gateway.
type RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
// Information about the requester transit gateway.
type RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
// The status of the transit gateway peering attachment.
type RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
// The transit gateway peering attachment.
type RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment struct {
	AccepterTgwInfo            *RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
	CreationTime               map[string]interface{}
	RequesterTgwInfo           *RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
	State                      map[string]interface{}
	Status                     *RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

type RejectTransitGatewayPeeringAttachmentResult struct {
	TransitGatewayPeeringAttachment *RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
}
