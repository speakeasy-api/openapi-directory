package shared

// SalesforceStandardObjectConfiguration
// Specifies configuration information for indexing a single standard object.
type SalesforceStandardObjectConfiguration struct {
	DocumentDataFieldName  string                           `json:"DocumentDataFieldName"`
	DocumentTitleFieldName *string                          `json:"DocumentTitleFieldName,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping  `json:"FieldMappings,omitempty"`
	Name                   SalesforceStandardObjectNameEnum `json:"Name"`
}
