package shared

// CloudWatchLoggingOptionDescription
// Description of the CloudWatch logging option.
type CloudWatchLoggingOptionDescription struct {
	CloudWatchLoggingOptionID *string `json:"CloudWatchLoggingOptionId,omitempty"`
	LogStreamARN              string  `json:"LogStreamARN"`
	RoleARN                   string  `json:"RoleARN"`
}
