package shared

// KinesisStreamsInputUpdate
// When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
type KinesisStreamsInputUpdate struct {
	ResourceARNUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleARNUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
