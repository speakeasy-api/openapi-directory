package shared

// DescribeNetworkInterfaceAttributeResult
// Contains the output of DescribeNetworkInterfaceAttribute.
type DescribeNetworkInterfaceAttributeResult struct {
	Attachment         map[string]interface{}
	Description        map[string]interface{}
	Groups             map[string]interface{}
	NetworkInterfaceID map[string]interface{}
	SourceDestCheck    map[string]interface{}
}
