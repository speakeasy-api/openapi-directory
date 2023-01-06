package shared

// EventSubscriptionsMessage
// <p/>
type EventSubscriptionsMessage struct {
	EventSubscriptionsList []map[string]interface{}
	Marker                 *string
}
