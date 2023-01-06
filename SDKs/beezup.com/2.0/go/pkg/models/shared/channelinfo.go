package shared

type ChannelInfoDetails struct {
	BusinessModel    *string `json:"businessModel,omitempty"`
	Category         *string `json:"category,omitempty"`
	ChannelType      *string `json:"channelType,omitempty"`
	Costs            *string `json:"costs,omitempty"`
	HomeURL          *string `json:"homeUrl,omitempty"`
	SubscriptionLink *string `json:"subscriptionLink,omitempty"`
	TrackingType     *string `json:"trackingType,omitempty"`
}

type ChannelInfoKeyNumbers struct {
	Categories    *string `json:"categories,omitempty"`
	Products      *string `json:"products,omitempty"`
	Stores        *string `json:"stores,omitempty"`
	ViewsPerMonth *string `json:"viewsPerMonth,omitempty"`
}

type ChannelInfoSalesContact struct {
	Email       *string `json:"email,omitempty"`
	Name        *string `json:"name,omitempty"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}

type ChannelInfoTechnicalContact struct {
	Email       *string `json:"email,omitempty"`
	Name        *string `json:"name,omitempty"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}

type ChannelInfo struct {
	BeezUPOffer        *string                      `json:"beezUPOffer,omitempty"`
	ChannelDescription *string                      `json:"channelDescription,omitempty"`
	ChannelID          string                       `json:"channelId"`
	ChannelLogoURL     *string                      `json:"channelLogoUrl,omitempty"`
	ChannelName        string                       `json:"channelName"`
	Details            *ChannelInfoDetails          `json:"details,omitempty"`
	KeyNumbers         *ChannelInfoKeyNumbers       `json:"keyNumbers,omitempty"`
	SalesContact       *ChannelInfoSalesContact     `json:"salesContact,omitempty"`
	TechnicalContact   *ChannelInfoTechnicalContact `json:"technicalContact,omitempty"`
}
