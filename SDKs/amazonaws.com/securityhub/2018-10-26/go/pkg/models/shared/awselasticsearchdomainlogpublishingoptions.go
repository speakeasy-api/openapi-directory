package shared

// AwsElasticsearchDomainLogPublishingOptionsIndexSlowLogs
// The log configuration.
type AwsElasticsearchDomainLogPublishingOptionsIndexSlowLogs struct {
	CloudWatchLogsLogGroupArn *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	Enabled                   *bool   `json:"Enabled,omitempty"`
}

// AwsElasticsearchDomainLogPublishingOptions
// configures the CloudWatch Logs to publish for the Elasticsearch domain.
type AwsElasticsearchDomainLogPublishingOptions struct {
	AuditLogs      *AwsElasticsearchDomainLogPublishingOptionsLogConfig     `json:"AuditLogs,omitempty"`
	IndexSlowLogs  *AwsElasticsearchDomainLogPublishingOptionsIndexSlowLogs `json:"IndexSlowLogs,omitempty"`
	SearchSlowLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig     `json:"SearchSlowLogs,omitempty"`
}
