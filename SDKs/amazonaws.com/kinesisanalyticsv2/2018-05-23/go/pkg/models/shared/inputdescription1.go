package shared

// InputDescription1
// Describes the application input configuration for a SQL-based Kinesis Data Analytics application.
type InputDescription1 struct {
	InAppStreamNames                        []string                                 `json:"InAppStreamNames,omitempty"`
	InputID                                 *string                                  `json:"InputId,omitempty"`
	InputParallelism                        *InputParallelism                        `json:"InputParallelism,omitempty"`
	InputProcessingConfigurationDescription *InputProcessingConfigurationDescription `json:"InputProcessingConfigurationDescription,omitempty"`
	InputSchema                             *SourceSchema1                           `json:"InputSchema,omitempty"`
	InputStartingPositionConfiguration      *InputStartingPositionConfiguration      `json:"InputStartingPositionConfiguration,omitempty"`
	KinesisFirehoseInputDescription         *KinesisFirehoseInputDescription         `json:"KinesisFirehoseInputDescription,omitempty"`
	KinesisStreamsInputDescription          *KinesisStreamsInputDescription          `json:"KinesisStreamsInputDescription,omitempty"`
	NamePrefix                              *string                                  `json:"NamePrefix,omitempty"`
}
