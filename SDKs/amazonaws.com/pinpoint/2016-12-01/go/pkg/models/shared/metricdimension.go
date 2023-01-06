package shared

type MetricDimension struct {
	ComparisonOperator *string  `json:"ComparisonOperator,omitempty"`
	Value              *float64 `json:"Value,omitempty"`
}
