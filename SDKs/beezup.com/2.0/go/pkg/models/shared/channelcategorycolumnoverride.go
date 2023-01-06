package shared

type ChannelCategoryColumnOverride struct {
	ChannelColumnDescription *string                     `json:"channelColumnDescription,omitempty"`
	ChannelColumnID          *string                     `json:"channelColumnId,omitempty"`
	ChannelColumnName        *string                     `json:"channelColumnName,omitempty"`
	Configuration            *ChannelColumnConfiguration `json:"configuration,omitempty"`
	RestrictedValues         map[string]string           `json:"restrictedValues,omitempty"`
	ShowInMapping            *bool                       `json:"showInMapping,omitempty"`
}
