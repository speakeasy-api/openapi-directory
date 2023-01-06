package shared

type GetRouteResponsesResponse struct {
	Items     map[string]interface{} `json:"Items,omitempty"`
	NextToken map[string]interface{} `json:"NextToken,omitempty"`
}
