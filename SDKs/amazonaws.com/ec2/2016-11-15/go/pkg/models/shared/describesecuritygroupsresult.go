package shared

type DescribeSecurityGroupsResult struct {
	NextToken      map[string]interface{}
	SecurityGroups map[string]interface{}
}
