package shared

// EventSubscriptionsMessage
// Represents the output of <a>DescribeEventSubscriptions</a>.
type EventSubscriptionsMessage struct {
	EventSubscriptionsList []map[string]interface{}
	Marker                 *string
}
