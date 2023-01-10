package shared

import (
	"time"
)

// EventSubscriptionsList
// Describes event subscriptions.
type EventSubscriptionsList struct {
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
