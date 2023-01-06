package shared

import (
	"time"
)

// GetPredictiveScalingForecastAnswerCapacityForecast
// A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.
type GetPredictiveScalingForecastAnswerCapacityForecast struct {
	Timestamps []time.Time
	Values     []float64
}

type GetPredictiveScalingForecastAnswer struct {
	CapacityForecast GetPredictiveScalingForecastAnswerCapacityForecast
	LoadForecast     []LoadForecast
	UpdateTime       time.Time
}
