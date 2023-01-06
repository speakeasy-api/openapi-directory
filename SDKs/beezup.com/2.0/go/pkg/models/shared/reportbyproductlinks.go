package shared

// ReportByProductLinks
// Depending if the report concerned multiple channels or one channel.
type ReportByProductLinks struct {
	AllChannelsLinks *ReportByProductAllChannelsLinks `json:"allChannelsLinks,omitempty"`
	OneChannelLinks  *ReportByProductOneChannelLinks  `json:"oneChannelLinks,omitempty"`
}
