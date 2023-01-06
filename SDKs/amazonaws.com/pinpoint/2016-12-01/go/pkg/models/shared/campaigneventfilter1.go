package shared

// CampaignEventFilter1
// Specifies the settings for events that cause a campaign to be sent.
type CampaignEventFilter1 struct {
	Dimensions EventDimensions1 `json:"Dimensions"`
	FilterType FilterTypeEnum   `json:"FilterType"`
}
