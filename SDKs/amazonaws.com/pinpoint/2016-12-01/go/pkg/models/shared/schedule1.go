package shared

// Schedule1
// Specifies the schedule settings for a campaign.
type Schedule1 struct {
	EndTime     *string               `json:"EndTime,omitempty"`
	EventFilter *CampaignEventFilter1 `json:"EventFilter,omitempty"`
	Frequency   *FrequencyEnum        `json:"Frequency,omitempty"`
	IsLocalTime *bool                 `json:"IsLocalTime,omitempty"`
	QuietTime   *QuietTime            `json:"QuietTime,omitempty"`
	StartTime   string                `json:"StartTime"`
	Timezone    *string               `json:"Timezone,omitempty"`
}
