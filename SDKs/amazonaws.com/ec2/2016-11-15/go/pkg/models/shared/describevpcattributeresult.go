package shared

// DescribeVpcAttributeResultEnableDNSHostnames
// Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
type DescribeVpcAttributeResultEnableDNSHostnames struct {
	Value map[string]interface{}
}

// DescribeVpcAttributeResultEnableDNSSupport
// Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
type DescribeVpcAttributeResultEnableDNSSupport struct {
	Value map[string]interface{}
}

type DescribeVpcAttributeResult struct {
	EnableDNSHostnames *DescribeVpcAttributeResultEnableDNSHostnames
	EnableDNSSupport   *DescribeVpcAttributeResultEnableDNSSupport
	VpcID              map[string]interface{}
}
