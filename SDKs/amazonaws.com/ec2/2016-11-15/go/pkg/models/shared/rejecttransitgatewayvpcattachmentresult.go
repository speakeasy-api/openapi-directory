package shared

// RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
// The VPC attachment options.
type RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport map[string]interface{}
	DNSSupport           map[string]interface{}
	Ipv6Support          map[string]interface{}
}

// RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
// Information about the attachment.
type RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment struct {
	CreationTime               map[string]interface{}
	Options                    *RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
	State                      map[string]interface{}
	SubnetIds                  map[string]interface{}
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayID           map[string]interface{}
	VpcID                      map[string]interface{}
	VpcOwnerID                 map[string]interface{}
}

type RejectTransitGatewayVpcAttachmentResult struct {
	TransitGatewayVpcAttachment *RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
}
