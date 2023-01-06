package shared

type GetStagesResponse struct {
	Items     map[string]interface{} `json:"Items,omitempty"`
	NextToken map[string]interface{} `json:"NextToken,omitempty"`
}
