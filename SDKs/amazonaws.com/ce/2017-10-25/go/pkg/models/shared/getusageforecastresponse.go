package shared

type GetUsageForecastResponse struct {
	ForecastResultsByTime []ForecastResult `json:"ForecastResultsByTime,omitempty"`
	Total                 *MetricValue     `json:"Total,omitempty"`
}
