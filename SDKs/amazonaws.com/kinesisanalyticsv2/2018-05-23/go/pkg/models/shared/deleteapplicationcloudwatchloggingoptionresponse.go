package shared

type DeleteApplicationCloudWatchLoggingOptionResponse struct {
	ApplicationARN                      *string                              `json:"ApplicationARN,omitempty"`
	ApplicationVersionID                *int64                               `json:"ApplicationVersionId,omitempty"`
	CloudWatchLoggingOptionDescriptions []CloudWatchLoggingOptionDescription `json:"CloudWatchLoggingOptionDescriptions,omitempty"`
}
