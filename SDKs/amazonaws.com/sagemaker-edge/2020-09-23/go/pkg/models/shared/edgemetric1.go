package shared

import (
	"time"
)

// EdgeMetric1
// Information required for edge device metrics.
type EdgeMetric1 struct {
	Dimension  *string    `json:"Dimension,omitempty"`
	MetricName *string    `json:"MetricName,omitempty"`
	Timestamp  *time.Time `json:"Timestamp,omitempty"`
	Value      *float64   `json:"Value,omitempty"`
}
