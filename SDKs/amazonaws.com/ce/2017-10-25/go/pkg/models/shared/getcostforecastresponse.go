package shared

type GetCostForecastResponse struct {
	ForecastResultsByTime []ForecastResult `json:"ForecastResultsByTime,omitempty"`
	Total                 *MetricValue     `json:"Total,omitempty"`
}
