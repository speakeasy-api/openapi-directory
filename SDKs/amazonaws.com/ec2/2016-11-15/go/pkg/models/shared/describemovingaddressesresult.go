package shared

type DescribeMovingAddressesResult struct {
	MovingAddressStatuses map[string]interface{}
	NextToken             map[string]interface{}
}
