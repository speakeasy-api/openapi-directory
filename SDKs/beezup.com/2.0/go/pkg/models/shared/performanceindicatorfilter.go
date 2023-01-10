package shared

type PerformanceIndicatorFilter struct {
	OperatorName         string                       `json:"operatorName"`
	PerformanceIndicator PerformanceIndicatorTypeEnum `json:"performanceIndicator"`
	Value                float64                      `json:"value"`
}
