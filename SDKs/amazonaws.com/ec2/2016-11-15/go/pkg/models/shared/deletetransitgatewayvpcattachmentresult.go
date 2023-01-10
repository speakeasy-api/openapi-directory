package shared

// DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
// The VPC attachment options.
type DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport map[string]interface{}
	DNSSupport           map[string]interface{}
	Ipv6Support          map[string]interface{}
}

// DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
// Information about the deleted VPC attachment.
type DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment struct {
	CreationTime               map[string]interface{}
	Options                    *DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
	State                      map[string]interface{}
	SubnetIds                  map[string]interface{}
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayID           map[string]interface{}
	VpcID                      map[string]interface{}
	VpcOwnerID                 map[string]interface{}
}

type DeleteTransitGatewayVpcAttachmentResult struct {
	TransitGatewayVpcAttachment *DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
}
