package shared

// CloudWatchLoggingOptionDescription
// Describes the Amazon CloudWatch logging option.
type CloudWatchLoggingOptionDescription struct {
	CloudWatchLoggingOptionID *string `json:"CloudWatchLoggingOptionId,omitempty"`
	LogStreamARN              string  `json:"LogStreamARN"`
	RoleARN                   *string `json:"RoleARN,omitempty"`
}
