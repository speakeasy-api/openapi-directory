package shared

type ListLogPatternsRequest struct {
	MaxResults        map[string]interface{} `json:"MaxResults,omitempty"`
	NextToken         *string                `json:"NextToken,omitempty"`
	PatternSetName    *string                `json:"PatternSetName,omitempty"`
	ResourceGroupName string                 `json:"ResourceGroupName"`
}
