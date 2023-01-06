package shared

type PublicChannelIndexLinks struct {
	ChannelCountryLov map[string]interface{} `json:"channelCountryLov,omitempty"`
	ChannelTypeLov    map[string]interface{} `json:"channelTypeLov,omitempty"`
	SectorLov         map[string]interface{} `json:"sectorLov,omitempty"`
	Self              map[string]interface{} `json:"self,omitempty"`
}

type PublicChannelIndex struct {
	Channels map[string]map[string]interface{} `json:"channels,omitempty"`
	Links    *PublicChannelIndexLinks          `json:"links,omitempty"`
}
