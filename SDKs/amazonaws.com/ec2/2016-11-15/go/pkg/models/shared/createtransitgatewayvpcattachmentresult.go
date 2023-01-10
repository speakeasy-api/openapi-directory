package shared

// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
// The VPC attachment options.
type CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport map[string]interface{}
	DNSSupport           map[string]interface{}
	Ipv6Support          map[string]interface{}
}

// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
// Information about the VPC attachment.
type CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment struct {
	CreationTime               map[string]interface{}
	Options                    *CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
	State                      map[string]interface{}
	SubnetIds                  map[string]interface{}
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayID           map[string]interface{}
	VpcID                      map[string]interface{}
	VpcOwnerID                 map[string]interface{}
}

type CreateTransitGatewayVpcAttachmentResult struct {
	TransitGatewayVpcAttachment *CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
}
