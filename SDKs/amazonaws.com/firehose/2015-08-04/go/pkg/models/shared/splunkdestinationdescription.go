package shared

// SplunkDestinationDescription
// Describes a destination in Splunk.
type SplunkDestinationDescription struct {
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	HECAcknowledgmentTimeoutInSeconds *int64                    `json:"HECAcknowledgmentTimeoutInSeconds,omitempty"`
	HECEndpoint                       *string                   `json:"HECEndpoint,omitempty"`
	HECEndpointType                   *HecEndpointTypeEnum      `json:"HECEndpointType,omitempty"`
	HECToken                          *string                   `json:"HECToken,omitempty"`
	ProcessingConfiguration           *ProcessingConfiguration  `json:"ProcessingConfiguration,omitempty"`
	RetryOptions                      *SplunkRetryOptions       `json:"RetryOptions,omitempty"`
	S3BackupMode                      *SplunkS3BackupModeEnum   `json:"S3BackupMode,omitempty"`
	S3DestinationDescription          *S3DestinationDescription `json:"S3DestinationDescription,omitempty"`
}
