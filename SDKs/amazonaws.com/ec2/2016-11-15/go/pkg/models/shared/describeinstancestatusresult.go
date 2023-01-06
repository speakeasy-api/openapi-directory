package shared

type DescribeInstanceStatusResult struct {
	InstanceStatuses map[string]interface{}
	NextToken        map[string]interface{}
}
