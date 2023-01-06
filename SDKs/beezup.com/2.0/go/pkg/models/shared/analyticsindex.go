package shared

// AnalyticsIndex
// The Analytics API operation index.
type AnalyticsIndex struct {
	Links    AnalyticsIndexLinks     `json:"links"`
	LovLinks *AnalyticsIndexLovLinks `json:"lovLinks,omitempty"`
	Stores   []AnalyticsStoreIndex   `json:"stores"`
}
