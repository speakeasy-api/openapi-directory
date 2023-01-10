package shared

// EventSubscriptionsList
// Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.
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
