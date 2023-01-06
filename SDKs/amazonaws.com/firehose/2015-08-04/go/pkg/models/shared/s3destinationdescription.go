package shared

// S3DestinationDescription
// Describes a destination in Amazon S3.
type S3DestinationDescription struct {
	BucketARN                string                    `json:"BucketARN"`
	BufferingHints           BufferingHints            `json:"BufferingHints"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat        CompressionFormatEnum     `json:"CompressionFormat"`
	EncryptionConfiguration  EncryptionConfiguration   `json:"EncryptionConfiguration"`
	ErrorOutputPrefix        *string                   `json:"ErrorOutputPrefix,omitempty"`
	Prefix                   *string                   `json:"Prefix,omitempty"`
	RoleARN                  string                    `json:"RoleARN"`
}
