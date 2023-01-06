package shared

type GetInsightSelectorsResponse struct {
	InsightSelectors []InsightSelector `json:"InsightSelectors,omitempty"`
	TrailARN         *string           `json:"TrailARN,omitempty"`
}
