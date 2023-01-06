package shared

// ChannelColumnConfiguration
// The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
type ChannelColumnConfiguration struct {
	BeezUPColumnName *string                          `json:"beezUPColumnName,omitempty"`
	ColumnDataType   BeezUpCommonColumnDataTypeEnum   `json:"columnDataType"`
	ColumnImportance BeezUpCommonColumnImportanceEnum `json:"columnImportance"`
}
