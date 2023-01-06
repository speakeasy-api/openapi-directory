package shared

// KinesisStreamConfig
// Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
type KinesisStreamConfig struct {
	RoleARN   string
	StreamARN string
}
