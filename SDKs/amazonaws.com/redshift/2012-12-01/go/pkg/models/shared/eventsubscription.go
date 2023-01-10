package shared

import (
	"time"
)

// EventSubscription
// Describes event subscriptions.
type EventSubscription struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []map[string]interface{}
	Severity                 *string
	SnsTopicArn              *string
	SourceIdsList            []map[string]interface{}
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *time.Time
	Tags                     []TagList
}
