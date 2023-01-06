package shared

// BeezUpColumnConfiguration
// Describe a BeezUP column
type BeezUpColumnConfiguration struct {
	BeezUPColumnName string                           `json:"beezUPColumnName"`
	CanBeTruncated   *bool                            `json:"canBeTruncated,omitempty"`
	ColumnDataType   *BeezUpCommonColumnDataTypeEnum  `json:"columnDataType,omitempty"`
	ColumnImportance BeezUpCommonColumnImportanceEnum `json:"columnImportance"`
	Description      *string                          `json:"description,omitempty"`
	DisplayGroupName string                           `json:"displayGroupName"`
	Unique           *bool                            `json:"unique,omitempty"`
}
