package shared

// DescribeSpotFleetRequestHistoryResponse
// Contains the output of DescribeSpotFleetRequestHistory.
type DescribeSpotFleetRequestHistoryResponse struct {
	HistoryRecords     map[string]interface{}
	LastEvaluatedTime  map[string]interface{}
	NextToken          map[string]interface{}
	SpotFleetRequestID map[string]interface{}
	StartTime          map[string]interface{}
}
