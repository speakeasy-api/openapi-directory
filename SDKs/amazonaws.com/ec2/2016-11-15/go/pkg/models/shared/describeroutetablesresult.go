package shared

// DescribeRouteTablesResult
// Contains the output of DescribeRouteTables.
type DescribeRouteTablesResult struct {
	NextToken   map[string]interface{}
	RouteTables map[string]interface{}
}
