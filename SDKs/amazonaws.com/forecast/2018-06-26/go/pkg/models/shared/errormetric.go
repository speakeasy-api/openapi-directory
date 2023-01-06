package shared

// ErrorMetric
//
//	Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.
type ErrorMetric struct {
	ForecastType *string  `json:"ForecastType,omitempty"`
	MAPE         *float64 `json:"MAPE,omitempty"`
	MASE         *float64 `json:"MASE,omitempty"`
	RMSE         *float64 `json:"RMSE,omitempty"`
	WAPE         *float64 `json:"WAPE,omitempty"`
}
