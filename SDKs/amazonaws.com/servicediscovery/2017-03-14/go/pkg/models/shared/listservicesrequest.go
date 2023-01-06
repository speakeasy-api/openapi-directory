package shared

type ListServicesRequest struct {
	Filters    map[string]interface{} `json:"Filters,omitempty"`
	MaxResults *int64                 `json:"MaxResults,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
