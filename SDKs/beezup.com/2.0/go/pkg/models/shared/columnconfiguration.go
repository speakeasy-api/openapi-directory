package shared

// ColumnConfiguration
// Indicates the configuration applied on the column (catalog or custom) during the importation process.
type ColumnConfiguration struct {
	BeezUPColumnName  *string                          `json:"beezUPColumnName,omitempty"`
	CanBeTruncated    *bool                            `json:"canBeTruncated,omitempty"`
	ColumnCultureName *string                          `json:"columnCultureName,omitempty"`
	ColumnDataType    BeezUpCommonColumnDataTypeEnum   `json:"columnDataType"`
	ColumnFormat      *string                          `json:"columnFormat,omitempty"`
	ColumnImportance  BeezUpCommonColumnImportanceEnum `json:"columnImportance"`
	DisplayGroupName  *string                          `json:"displayGroupName,omitempty"`
}
