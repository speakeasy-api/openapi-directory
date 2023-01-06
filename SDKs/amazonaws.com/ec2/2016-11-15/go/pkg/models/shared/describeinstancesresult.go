package shared

type DescribeInstancesResult struct {
	NextToken    map[string]interface{}
	Reservations map[string]interface{}
}
