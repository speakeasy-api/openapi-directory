package shared

// KinesisStreamsInputDescription
//
//	Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.
type KinesisStreamsInputDescription struct {
	ResourceARN *string `json:"ResourceARN,omitempty"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
