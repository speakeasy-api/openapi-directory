package shared

// Action
// A configuration that specifies the action to perform when anomalies are detected.
type Action struct {
	LambdaConfiguration *LambdaConfiguration `json:"LambdaConfiguration,omitempty"`
	SNSConfiguration    *SnsConfiguration    `json:"SNSConfiguration,omitempty"`
}
