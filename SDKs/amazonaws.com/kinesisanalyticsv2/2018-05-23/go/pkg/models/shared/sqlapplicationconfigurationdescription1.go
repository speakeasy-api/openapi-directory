package shared

// SQLApplicationConfigurationDescription1
// Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
type SQLApplicationConfigurationDescription1 struct {
	InputDescriptions               []InputDescription1              `json:"InputDescriptions,omitempty"`
	OutputDescriptions              []OutputDescription              `json:"OutputDescriptions,omitempty"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions,omitempty"`
}
