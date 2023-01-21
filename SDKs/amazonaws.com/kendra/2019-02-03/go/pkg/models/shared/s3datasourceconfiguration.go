package shared

// S3DataSourceConfiguration
// Provides configuration information for a data source to index documents in an Amazon S3 bucket.
type S3DataSourceConfiguration struct {
	AccessControlListConfiguration *AccessControlListConfiguration `json:"AccessControlListConfiguration,omitempty"`
	BucketName                     string                          `json:"BucketName"`
	DocumentsMetadataConfiguration *DocumentsMetadataConfiguration `json:"DocumentsMetadataConfiguration,omitempty"`
	ExclusionPatterns              []string                        `json:"ExclusionPatterns,omitempty"`
	InclusionPatterns              []string                        `json:"InclusionPatterns,omitempty"`
	InclusionPrefixes              []string                        `json:"InclusionPrefixes,omitempty"`
}
