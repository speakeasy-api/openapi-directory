package shared

// AttachVpnGatewayResultVpcAttachment
// Information about the attachment.
type AttachVpnGatewayResultVpcAttachment struct {
	State map[string]interface{}
	VpcID map[string]interface{}
}

// AttachVpnGatewayResult
// Contains the output of AttachVpnGateway.
type AttachVpnGatewayResult struct {
	VpcAttachment *AttachVpnGatewayResultVpcAttachment
}
