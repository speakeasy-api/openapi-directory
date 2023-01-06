package shared

// SplunkDestinationConfiguration
// Describes the configuration of a destination in Splunk.
type SplunkDestinationConfiguration struct {
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions  `json:"CloudWatchLoggingOptions,omitempty"`
	HECAcknowledgmentTimeoutInSeconds *int64                     `json:"HECAcknowledgmentTimeoutInSeconds,omitempty"`
	HECEndpoint                       string                     `json:"HECEndpoint"`
	HECEndpointType                   HecEndpointTypeEnum        `json:"HECEndpointType"`
	HECToken                          string                     `json:"HECToken"`
	ProcessingConfiguration           *ProcessingConfiguration   `json:"ProcessingConfiguration,omitempty"`
	RetryOptions                      *SplunkRetryOptions        `json:"RetryOptions,omitempty"`
	S3BackupMode                      *SplunkS3BackupModeEnum    `json:"S3BackupMode,omitempty"`
	S3Configuration                   S3DestinationConfiguration `json:"S3Configuration"`
}
