package shared

type EventSubscriptionsMessage struct {
	EventSubscriptionsList []map[string]interface{}
	Marker                 *string
}
