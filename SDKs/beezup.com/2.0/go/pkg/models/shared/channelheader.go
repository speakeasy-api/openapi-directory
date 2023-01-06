package shared

// ChannelHeader
// The available channel
type ChannelHeader struct {
	ChannelID      string             `json:"channelId"`
	ChannelLogoURL string             `json:"channelLogoUrl"`
	ChannelName    string             `json:"channelName"`
	Links          ChannelHeaderLinks `json:"links"`
	Types          []string           `json:"types"`
}
