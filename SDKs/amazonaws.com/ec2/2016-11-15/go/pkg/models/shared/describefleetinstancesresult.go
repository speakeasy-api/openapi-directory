package shared

type DescribeFleetInstancesResult struct {
	ActiveInstances map[string]interface{}
	FleetID         map[string]interface{}
	NextToken       map[string]interface{}
}
