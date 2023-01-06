package shared

type ListNotificationChannelsResponse struct {
	Channels  map[string]interface{} `json:"Channels,omitempty"`
	NextToken *string                `json:"NextToken,omitempty"`
}
