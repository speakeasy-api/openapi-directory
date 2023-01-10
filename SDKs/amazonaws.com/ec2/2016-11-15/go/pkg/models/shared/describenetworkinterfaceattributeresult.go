package shared

// DescribeNetworkInterfaceAttributeResultAttachment
// The attachment (if any) of the network interface.
type DescribeNetworkInterfaceAttributeResultAttachment struct {
	AttachTime          map[string]interface{}
	AttachmentID        map[string]interface{}
	DeleteOnTermination map[string]interface{}
	DeviceIndex         map[string]interface{}
	InstanceID          map[string]interface{}
	InstanceOwnerID     map[string]interface{}
	NetworkCardIndex    map[string]interface{}
	Status              map[string]interface{}
}

// DescribeNetworkInterfaceAttributeResultDescription
// The description of the network interface.
type DescribeNetworkInterfaceAttributeResultDescription struct {
	Value map[string]interface{}
}

// DescribeNetworkInterfaceAttributeResultSourceDestCheck
// Indicates whether source/destination checking is enabled.
type DescribeNetworkInterfaceAttributeResultSourceDestCheck struct {
	Value map[string]interface{}
}

// DescribeNetworkInterfaceAttributeResult
// Contains the output of DescribeNetworkInterfaceAttribute.
type DescribeNetworkInterfaceAttributeResult struct {
	Attachment         *DescribeNetworkInterfaceAttributeResultAttachment
	Description        *DescribeNetworkInterfaceAttributeResultDescription
	Groups             map[string]interface{}
	NetworkInterfaceID map[string]interface{}
	SourceDestCheck    *DescribeNetworkInterfaceAttributeResultSourceDestCheck
}
