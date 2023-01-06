package shared

// Alarm
// Represents a CloudWatch alarm associated with a scaling policy.
type Alarm struct {
	AlarmARN  string `json:"AlarmARN"`
	AlarmName string `json:"AlarmName"`
}
