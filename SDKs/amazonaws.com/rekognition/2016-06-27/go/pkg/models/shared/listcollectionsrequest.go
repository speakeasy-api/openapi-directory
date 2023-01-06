package shared

type ListCollectionsRequest struct {
	MaxResults *int64                 `json:"MaxResults,omitempty"`
	NextToken  map[string]interface{} `json:"NextToken,omitempty"`
}
