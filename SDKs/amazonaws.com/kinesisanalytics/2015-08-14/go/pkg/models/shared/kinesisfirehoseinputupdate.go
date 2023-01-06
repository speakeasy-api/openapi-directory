package shared

// KinesisFirehoseInputUpdate
// When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
type KinesisFirehoseInputUpdate struct {
	ResourceARNUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleARNUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
