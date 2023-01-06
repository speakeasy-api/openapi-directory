package shared

// ListAgentsResponse
// ListAgentsResponse
type ListAgentsResponse struct {
	Agents    map[string]interface{} `json:"Agents,omitempty"`
	NextToken *string                `json:"NextToken,omitempty"`
}
