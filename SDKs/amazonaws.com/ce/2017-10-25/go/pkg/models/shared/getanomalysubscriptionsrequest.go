package shared

type GetAnomalySubscriptionsRequest struct {
	MaxResults          *int64   `json:"MaxResults,omitempty"`
	MonitorArn          *string  `json:"MonitorArn,omitempty"`
	NextPageToken       *string  `json:"NextPageToken,omitempty"`
	SubscriptionArnList []string `json:"SubscriptionArnList,omitempty"`
}
