package shared

type GetCostForecastRequest struct {
	Filter                  *Expression     `json:"Filter,omitempty"`
	Granularity             GranularityEnum `json:"Granularity"`
	Metric                  MetricEnum      `json:"Metric"`
	PredictionIntervalLevel *int64          `json:"PredictionIntervalLevel,omitempty"`
	TimePeriod              DateInterval    `json:"TimePeriod"`
}
