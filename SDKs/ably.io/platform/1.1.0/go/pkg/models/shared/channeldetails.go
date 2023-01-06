package shared

type ChannelDetails struct {
	ChannelID      string         `json:"channelId"`
	IsGlobalMaster *bool          `json:"isGlobalMaster,omitempty"`
	Region         *string        `json:"region,omitempty"`
	Status         *ChannelStatus `json:"status,omitempty"`
}
