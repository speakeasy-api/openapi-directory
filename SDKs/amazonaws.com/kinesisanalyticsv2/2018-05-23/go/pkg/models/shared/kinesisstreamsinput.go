package shared

// KinesisStreamsInput
//
//	Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
type KinesisStreamsInput struct {
	ResourceARN string `json:"ResourceARN"`
}
