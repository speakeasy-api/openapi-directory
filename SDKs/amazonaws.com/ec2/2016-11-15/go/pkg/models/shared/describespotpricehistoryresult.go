package shared

// DescribeSpotPriceHistoryResult
// Contains the output of DescribeSpotPriceHistory.
type DescribeSpotPriceHistoryResult struct {
	NextToken        map[string]interface{}
	SpotPriceHistory map[string]interface{}
}
