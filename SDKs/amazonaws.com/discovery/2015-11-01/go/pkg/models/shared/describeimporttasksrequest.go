package shared

type DescribeImportTasksRequest struct {
	Filters    map[string]interface{} `json:"filters,omitempty"`
	MaxResults *int64                 `json:"maxResults,omitempty"`
	NextToken  *string                `json:"nextToken,omitempty"`
}
