package shared

// DeprecateRule1
// Specifies an AMI deprecation rule for a schedule.
type DeprecateRule1 struct {
	Count        *int64                 `json:"Count,omitempty"`
	Interval     *int64                 `json:"Interval,omitempty"`
	IntervalUnit map[string]interface{} `json:"IntervalUnit,omitempty"`
}
