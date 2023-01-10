package shared

// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
// The VPC attachment options.
type AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport map[string]interface{}
	DNSSupport           map[string]interface{}
	Ipv6Support          map[string]interface{}
}

// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
// The VPC attachment.
type AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment struct {
	CreationTime               map[string]interface{}
	Options                    *AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
	State                      map[string]interface{}
	SubnetIds                  map[string]interface{}
	Tags                       map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayID           map[string]interface{}
	VpcID                      map[string]interface{}
	VpcOwnerID                 map[string]interface{}
}

type AcceptTransitGatewayVpcAttachmentResult struct {
	TransitGatewayVpcAttachment *AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
}
