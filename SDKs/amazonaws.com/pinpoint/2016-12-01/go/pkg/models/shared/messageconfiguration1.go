package shared

// MessageConfiguration1
// Specifies the message configuration settings for a campaign.
type MessageConfiguration1 struct {
	ADMMessage     *Message               `json:"ADMMessage,omitempty"`
	APNSMessage    *Message               `json:"APNSMessage,omitempty"`
	BaiduMessage   *Message               `json:"BaiduMessage,omitempty"`
	CustomMessage  *CampaignCustomMessage `json:"CustomMessage,omitempty"`
	DefaultMessage *Message               `json:"DefaultMessage,omitempty"`
	EmailMessage   *CampaignEmailMessage  `json:"EmailMessage,omitempty"`
	GCMMessage     *Message               `json:"GCMMessage,omitempty"`
	InAppMessage   *CampaignInAppMessage1 `json:"InAppMessage,omitempty"`
	SMSMessage     *CampaignSmsMessage    `json:"SMSMessage,omitempty"`
}
