package shared

// StreamingDistributionConfigAliases
// A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
type StreamingDistributionConfigAliases struct {
	Items    []map[string]interface{}
	Quantity int64
}

// StreamingDistributionConfig
// The RTMP distribution's configuration information.
type StreamingDistributionConfig struct {
	Aliases         *StreamingDistributionConfigAliases
	CallerReference string
	Comment         string
	Enabled         bool
	Logging         *StreamingLoggingConfig
	PriceClass      *PriceClassEnum
	S3Origin        S3Origin
	TrustedSigners  TrustedSigners
}
