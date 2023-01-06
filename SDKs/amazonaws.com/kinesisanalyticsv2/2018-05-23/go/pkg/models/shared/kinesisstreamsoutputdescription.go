package shared

// KinesisStreamsOutputDescription
// For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.
type KinesisStreamsOutputDescription struct {
	ResourceARN string  `json:"ResourceARN"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
