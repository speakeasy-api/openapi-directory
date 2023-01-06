package shared

type PublicChannelInfoListLinks struct {
	Self map[string]interface{} `json:"self,omitempty"`
}

type PublicChannelInfoList struct {
	Channels []PublicChannelInfo         `json:"channels,omitempty"`
	Links    *PublicChannelInfoListLinks `json:"links,omitempty"`
}
