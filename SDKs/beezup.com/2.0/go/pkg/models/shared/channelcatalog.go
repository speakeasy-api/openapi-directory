package shared

// ChannelCatalog
// The basic info related to a channel
type ChannelCatalog struct {
	ChannelID       string `json:"channelId"`
	ChannelImageURL string `json:"channelImageUrl"`
	ChannelName     string `json:"channelName"`
}
