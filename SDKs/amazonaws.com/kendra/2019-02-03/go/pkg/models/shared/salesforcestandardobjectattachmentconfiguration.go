package shared

// SalesforceStandardObjectAttachmentConfiguration
// Provides configuration information for processing attachments to Salesforce standard objects.
type SalesforceStandardObjectAttachmentConfiguration struct {
	DocumentTitleFieldName *string                         `json:"DocumentTitleFieldName,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
}
