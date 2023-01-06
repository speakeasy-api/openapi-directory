package shared

type PutEventSelectorsResponse struct {
	AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors,omitempty"`
	EventSelectors         []EventSelector         `json:"EventSelectors,omitempty"`
	TrailARN               *string                 `json:"TrailARN,omitempty"`
}
