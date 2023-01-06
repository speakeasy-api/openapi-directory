package shared

// RedshiftRetryOptions
// Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
type RedshiftRetryOptions struct {
	DurationInSeconds map[string]interface{} `json:"DurationInSeconds,omitempty"`
}
