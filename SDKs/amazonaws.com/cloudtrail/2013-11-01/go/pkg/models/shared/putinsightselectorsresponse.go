package shared

type PutInsightSelectorsResponse struct {
	InsightSelectors []InsightSelector `json:"InsightSelectors,omitempty"`
	TrailARN         *string           `json:"TrailARN,omitempty"`
}
