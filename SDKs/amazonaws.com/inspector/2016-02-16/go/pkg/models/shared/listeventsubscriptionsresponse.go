package shared

type ListEventSubscriptionsResponse struct {
	NextToken     *string                `json:"nextToken,omitempty"`
	Subscriptions map[string]interface{} `json:"subscriptions"`
}
