package shared

// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
// Information about the accepter transit gateway.
type AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
// Information about the requester transit gateway.
type AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo struct {
	OwnerID          map[string]interface{}
	Region           map[string]interface{}
	TransitGatewayID map[string]interface{}
}

// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
// The status of the transit gateway peering attachment.
type AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
// The transit gateway peering attachment.
type AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment struct {
	AccepterTgwInfo            *AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
	CreationTime               map[string]interface{}
	RequesterTgwInfo           *AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
	State                      map[string]interface{}
	Status                     *AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

type AcceptTransitGatewayPeeringAttachmentResult struct {
	TransitGatewayPeeringAttachment *AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
}
