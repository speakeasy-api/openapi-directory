package shared

// ChannelColumn
// The channel column
type ChannelColumn struct {
	ChannelColumnDescription *string                    `json:"channelColumnDescription,omitempty"`
	ChannelColumnID          string                     `json:"channelColumnId"`
	ChannelColumnName        string                     `json:"channelColumnName"`
	Configuration            ChannelColumnConfiguration `json:"configuration"`
	Position                 int64                      `json:"position"`
	RestrictedValues         map[string]string          `json:"restrictedValues,omitempty"`
	ShowInMapping            bool                       `json:"showInMapping"`
}
