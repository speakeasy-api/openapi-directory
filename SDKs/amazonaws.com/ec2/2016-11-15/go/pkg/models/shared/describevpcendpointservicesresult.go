package shared

// DescribeVpcEndpointServicesResult
// Contains the output of DescribeVpcEndpointServices.
type DescribeVpcEndpointServicesResult struct {
	NextToken      map[string]interface{}
	ServiceDetails map[string]interface{}
	ServiceNames   map[string]interface{}
}
