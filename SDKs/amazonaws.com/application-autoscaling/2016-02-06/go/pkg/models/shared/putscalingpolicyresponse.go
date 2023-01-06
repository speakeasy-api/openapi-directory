package shared

type PutScalingPolicyResponse struct {
	Alarms    []Alarm `json:"Alarms,omitempty"`
	PolicyARN string  `json:"PolicyARN"`
}
