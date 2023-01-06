package shared

// CloudWatchLoggingOption
// Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
type CloudWatchLoggingOption struct {
	LogStreamARN string `json:"LogStreamARN"`
	RoleARN      string `json:"RoleARN"`
}
