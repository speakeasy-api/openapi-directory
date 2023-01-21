package shared

type UpdateAnomalySubscriptionRequest struct {
	Frequency        *AnomalySubscriptionFrequencyEnum `json:"Frequency,omitempty"`
	MonitorArnList   []string                          `json:"MonitorArnList,omitempty"`
	Subscribers      []Subscriber                      `json:"Subscribers,omitempty"`
	SubscriptionArn  string                            `json:"SubscriptionArn"`
	SubscriptionName *string                           `json:"SubscriptionName,omitempty"`
	Threshold        *float64                          `json:"Threshold,omitempty"`
}
