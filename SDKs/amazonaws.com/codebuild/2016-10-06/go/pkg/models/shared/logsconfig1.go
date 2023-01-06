package shared

// LogsConfig1
//
//	Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
type LogsConfig1 struct {
	CloudWatchLogs *CloudWatchLogsConfig `json:"cloudWatchLogs,omitempty"`
	S3Logs         *S3LogsConfig1        `json:"s3Logs,omitempty"`
}
