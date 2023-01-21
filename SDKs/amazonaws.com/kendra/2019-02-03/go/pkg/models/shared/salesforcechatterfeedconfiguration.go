package shared

// SalesforceChatterFeedConfiguration
// Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.
type SalesforceChatterFeedConfiguration struct {
	DocumentDataFieldName  string                                       `json:"DocumentDataFieldName"`
	DocumentTitleFieldName *string                                      `json:"DocumentTitleFieldName,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping              `json:"FieldMappings,omitempty"`
	IncludeFilterTypes     []SalesforceChatterFeedIncludeFilterTypeEnum `json:"IncludeFilterTypes,omitempty"`
}
