package shared

// KinesisFirehoseOutputDescription
//
//	For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.
type KinesisFirehoseOutputDescription struct {
	ResourceARN *string `json:"ResourceARN,omitempty"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
