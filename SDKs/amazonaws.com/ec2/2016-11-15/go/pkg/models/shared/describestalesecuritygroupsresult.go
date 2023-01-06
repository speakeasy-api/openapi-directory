package shared

type DescribeStaleSecurityGroupsResult struct {
	NextToken             map[string]interface{}
	StaleSecurityGroupSet map[string]interface{}
}
