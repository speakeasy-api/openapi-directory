package shared

// DescribeVpcEndpointsResult
// Contains the output of DescribeVpcEndpoints.
type DescribeVpcEndpointsResult struct {
	NextToken    map[string]interface{}
	VpcEndpoints map[string]interface{}
}
