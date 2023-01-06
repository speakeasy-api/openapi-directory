package shared

// KinesisStreamsInputDescription
// For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.
type KinesisStreamsInputDescription struct {
	ResourceARN string  `json:"ResourceARN"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
