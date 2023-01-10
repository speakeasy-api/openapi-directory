package shared

type EventSubscriptionsMessage struct {
	EventSubscriptionsList []EventSubscriptionsList
	Marker                 *string
}
