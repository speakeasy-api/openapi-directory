package shared

// MessageConfigurationBaiduMessage
// Specifies the content and settings for a push notification that's sent to recipients of a campaign.
type MessageConfigurationBaiduMessage struct {
	Action            *ActionEnum `json:"Action,omitempty"`
	Body              *string     `json:"Body,omitempty"`
	ImageIconURL      *string     `json:"ImageIconUrl,omitempty"`
	ImageSmallIconURL *string     `json:"ImageSmallIconUrl,omitempty"`
	ImageURL          *string     `json:"ImageUrl,omitempty"`
	JSONBody          *string     `json:"JsonBody,omitempty"`
	MediaURL          *string     `json:"MediaUrl,omitempty"`
	RawContent        *string     `json:"RawContent,omitempty"`
	SilentPush        *bool       `json:"SilentPush,omitempty"`
	TimeToLive        *int64      `json:"TimeToLive,omitempty"`
	Title             *string     `json:"Title,omitempty"`
	URL               *string     `json:"Url,omitempty"`
}

// MessageConfiguration
// Specifies the message configuration settings for a campaign.
type MessageConfiguration struct {
	ADMMessage     *Message                          `json:"ADMMessage,omitempty"`
	APNSMessage    *Message                          `json:"APNSMessage,omitempty"`
	BaiduMessage   *MessageConfigurationBaiduMessage `json:"BaiduMessage,omitempty"`
	CustomMessage  *CampaignCustomMessage            `json:"CustomMessage,omitempty"`
	DefaultMessage *Message                          `json:"DefaultMessage,omitempty"`
	EmailMessage   *CampaignEmailMessage             `json:"EmailMessage,omitempty"`
	GCMMessage     *Message                          `json:"GCMMessage,omitempty"`
	InAppMessage   *CampaignInAppMessage             `json:"InAppMessage,omitempty"`
	SMSMessage     *CampaignSmsMessage               `json:"SMSMessage,omitempty"`
}
