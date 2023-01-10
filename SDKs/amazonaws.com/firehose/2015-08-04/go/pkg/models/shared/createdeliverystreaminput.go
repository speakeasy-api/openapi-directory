package shared

// CreateDeliveryStreamInputS3DestinationConfiguration
// [Deprecated] The destination in Amazon S3. You can specify only one destination.
type CreateDeliveryStreamInputS3DestinationConfiguration struct {
	BucketARN                string                    `json:"BucketARN"`
	BufferingHints           *BufferingHints           `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat        *CompressionFormatEnum    `json:"CompressionFormat,omitempty"`
	EncryptionConfiguration  *EncryptionConfiguration  `json:"EncryptionConfiguration,omitempty"`
	ErrorOutputPrefix        *string                   `json:"ErrorOutputPrefix,omitempty"`
	Prefix                   *string                   `json:"Prefix,omitempty"`
	RoleARN                  string                    `json:"RoleARN"`
}

type CreateDeliveryStreamInput struct {
	DeliveryStreamEncryptionConfigurationInput *DeliveryStreamEncryptionConfigurationInput          `json:"DeliveryStreamEncryptionConfigurationInput,omitempty"`
	DeliveryStreamName                         string                                               `json:"DeliveryStreamName"`
	DeliveryStreamType                         *DeliveryStreamTypeEnum                              `json:"DeliveryStreamType,omitempty"`
	ElasticsearchDestinationConfiguration      *ElasticsearchDestinationConfiguration               `json:"ElasticsearchDestinationConfiguration,omitempty"`
	ExtendedS3DestinationConfiguration         *ExtendedS3DestinationConfiguration                  `json:"ExtendedS3DestinationConfiguration,omitempty"`
	HTTPEndpointDestinationConfiguration       *HTTPEndpointDestinationConfiguration                `json:"HttpEndpointDestinationConfiguration,omitempty"`
	KinesisStreamSourceConfiguration           *KinesisStreamSourceConfiguration                    `json:"KinesisStreamSourceConfiguration,omitempty"`
	RedshiftDestinationConfiguration           *RedshiftDestinationConfiguration                    `json:"RedshiftDestinationConfiguration,omitempty"`
	S3DestinationConfiguration                 *CreateDeliveryStreamInputS3DestinationConfiguration `json:"S3DestinationConfiguration,omitempty"`
	SplunkDestinationConfiguration             *SplunkDestinationConfiguration                      `json:"SplunkDestinationConfiguration,omitempty"`
	Tags                                       []Tag                                                `json:"Tags,omitempty"`
}
