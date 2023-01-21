package shared

type ChannelCategoryColumnOverride struct {
	ChannelColumnDescription *string                    `json:"channelColumnDescription,omitempty"`
	ChannelColumnID          string                     `json:"channelColumnId"`
	ChannelColumnName        string                     `json:"channelColumnName"`
	Configuration            ChannelColumnConfiguration `json:"configuration"`
	RestrictedValues         map[string]string          `json:"restrictedValues,omitempty"`
	ShowInMapping            bool                       `json:"showInMapping"`
}
