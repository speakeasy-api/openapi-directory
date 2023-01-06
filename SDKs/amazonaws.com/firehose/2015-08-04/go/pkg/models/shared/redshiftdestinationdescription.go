package shared

// RedshiftDestinationDescription
// Describes a destination in Amazon Redshift.
type RedshiftDestinationDescription struct {
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	ClusterJDBCURL           string                    `json:"ClusterJDBCURL"`
	CopyCommand              CopyCommand               `json:"CopyCommand"`
	ProcessingConfiguration  *ProcessingConfiguration  `json:"ProcessingConfiguration,omitempty"`
	RetryOptions             *RedshiftRetryOptions1    `json:"RetryOptions,omitempty"`
	RoleARN                  string                    `json:"RoleARN"`
	S3BackupDescription      *S3DestinationDescription `json:"S3BackupDescription,omitempty"`
	S3BackupMode             *RedshiftS3BackupModeEnum `json:"S3BackupMode,omitempty"`
	S3DestinationDescription S3DestinationDescription  `json:"S3DestinationDescription"`
	Username                 string                    `json:"Username"`
}
