package shared

type EventSubscription struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []map[string]interface{}
	SnsTopicArn              *string
	SourceIdsList            []map[string]interface{}
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *string
}
