package shared

type GetAnomalySubscriptionsResponse struct {
	AnomalySubscriptions []AnomalySubscription `json:"AnomalySubscriptions"`
	NextPageToken        *string               `json:"NextPageToken,omitempty"`
}
