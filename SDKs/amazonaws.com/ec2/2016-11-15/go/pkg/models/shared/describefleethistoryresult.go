package shared

type DescribeFleetHistoryResult struct {
	FleetID           map[string]interface{}
	HistoryRecords    map[string]interface{}
	LastEvaluatedTime map[string]interface{}
	NextToken         map[string]interface{}
	StartTime         map[string]interface{}
}
