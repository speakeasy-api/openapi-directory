package shared

// EventSubscriptionsList
// Detailed information about an event to which you have subscribed.
type EventSubscriptionsList struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []map[string]interface{}
	EventSubscriptionArn     *string
	SnsTopicArn              *string
	SourceIdsList            []map[string]interface{}
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *string
}
