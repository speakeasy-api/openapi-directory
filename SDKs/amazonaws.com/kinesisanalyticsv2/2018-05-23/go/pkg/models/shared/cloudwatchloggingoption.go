package shared

// CloudWatchLoggingOption
// Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
type CloudWatchLoggingOption struct {
	LogStreamARN string `json:"LogStreamARN"`
}
