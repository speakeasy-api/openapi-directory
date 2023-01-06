package shared

// EventSubscription1
// Detailed information about an event to which you have subscribed.
type EventSubscription1 struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []map[string]interface{}
	EventSubscriptionArn     *string
	SnsTopicArn              *string
	SourceIdsList            map[string]interface{}
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *string
}
