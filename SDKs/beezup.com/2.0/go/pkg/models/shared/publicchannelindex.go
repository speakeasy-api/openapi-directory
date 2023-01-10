package shared

type PublicChannelIndexLinks struct {
	ChannelCountryLov *LinksGetPublicListOfValuesLink `json:"channelCountryLov,omitempty"`
	ChannelTypeLov    *LinksGetPublicListOfValuesLink `json:"channelTypeLov,omitempty"`
	SectorLov         *LinksGetPublicListOfValuesLink `json:"sectorLov,omitempty"`
	Self              *LinksGetChannelsIndexLink      `json:"self,omitempty"`
}

type PublicChannelIndex struct {
	Channels map[string]LinksGetChannelsLink `json:"channels,omitempty"`
	Links    *PublicChannelIndexLinks        `json:"links,omitempty"`
}
