package shared

type ListDeviceEventsResponse struct {
	Events    map[string]interface{} `json:"Events,omitempty"`
	NextToken map[string]interface{} `json:"NextToken,omitempty"`
}
