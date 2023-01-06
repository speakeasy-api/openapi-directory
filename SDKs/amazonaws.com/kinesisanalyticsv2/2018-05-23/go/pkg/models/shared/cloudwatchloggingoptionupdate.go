package shared

// CloudWatchLoggingOptionUpdate
// Describes the Amazon CloudWatch logging option updates.
type CloudWatchLoggingOptionUpdate struct {
	CloudWatchLoggingOptionID string  `json:"CloudWatchLoggingOptionId"`
	LogStreamARNUpdate        *string `json:"LogStreamARNUpdate,omitempty"`
}
