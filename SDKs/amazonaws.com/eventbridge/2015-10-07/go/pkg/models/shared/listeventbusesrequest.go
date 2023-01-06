package shared

type ListEventBusesRequest struct {
	Limit      *int64                 `json:"Limit,omitempty"`
	NamePrefix map[string]interface{} `json:"NamePrefix,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
