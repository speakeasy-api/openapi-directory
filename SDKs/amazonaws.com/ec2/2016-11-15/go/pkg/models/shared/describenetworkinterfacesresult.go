package shared

// DescribeNetworkInterfacesResult
// Contains the output of DescribeNetworkInterfaces.
type DescribeNetworkInterfacesResult struct {
	NetworkInterfaces map[string]interface{}
	NextToken         map[string]interface{}
}
