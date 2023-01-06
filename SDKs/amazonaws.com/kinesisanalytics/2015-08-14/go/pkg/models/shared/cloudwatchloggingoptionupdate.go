package shared

// CloudWatchLoggingOptionUpdate
// Describes CloudWatch logging option updates.
type CloudWatchLoggingOptionUpdate struct {
	CloudWatchLoggingOptionID string  `json:"CloudWatchLoggingOptionId"`
	LogStreamARNUpdate        *string `json:"LogStreamARNUpdate,omitempty"`
	RoleARNUpdate             *string `json:"RoleARNUpdate,omitempty"`
}
