package shared

// RedshiftRetryOptions1
// Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
type RedshiftRetryOptions1 struct {
	DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
}
