package shared

// DescribeEventSubscriptionsMessage
// <p/>
type DescribeEventSubscriptionsMessage struct {
	Filters          map[string]interface{} `json:"Filters,omitempty"`
	Marker           *string                `json:"Marker,omitempty"`
	MaxRecords       *int64                 `json:"MaxRecords,omitempty"`
	SubscriptionName *string                `json:"SubscriptionName,omitempty"`
}
