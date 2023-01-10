package shared

// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
// The VPC attachment options.
type ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport map[string]interface{}
	DNSSupport           map[string]interface{}
	Ipv6Support          map[string]interface{}
}

// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
// Information about the modified attachment.
type ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment struct {
	CreationTime               map[string]interface{}
	Options                    *ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
	State                      map[string]interface{}
	SubnetIds                  map[string]interface{}
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayID           map[string]interface{}
	VpcID                      map[string]interface{}
	VpcOwnerID                 map[string]interface{}
}

type ModifyTransitGatewayVpcAttachmentResult struct {
	TransitGatewayVpcAttachment *ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
}
