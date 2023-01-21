package shared

type ListFaqsRequest struct {
	IndexID    string  `json:"IndexId"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
