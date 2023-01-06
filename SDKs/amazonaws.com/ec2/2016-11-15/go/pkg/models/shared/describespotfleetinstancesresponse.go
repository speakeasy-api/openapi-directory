package shared

// DescribeSpotFleetInstancesResponse
// Contains the output of DescribeSpotFleetInstances.
type DescribeSpotFleetInstancesResponse struct {
	ActiveInstances    map[string]interface{}
	NextToken          map[string]interface{}
	SpotFleetRequestID map[string]interface{}
}
