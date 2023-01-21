package shared

// ForecastResult
// The forecast that's created for your query.
type ForecastResult struct {
	MeanValue                    *string       `json:"MeanValue,omitempty"`
	PredictionIntervalLowerBound *string       `json:"PredictionIntervalLowerBound,omitempty"`
	PredictionIntervalUpperBound *string       `json:"PredictionIntervalUpperBound,omitempty"`
	TimePeriod                   *DateInterval `json:"TimePeriod,omitempty"`
}
