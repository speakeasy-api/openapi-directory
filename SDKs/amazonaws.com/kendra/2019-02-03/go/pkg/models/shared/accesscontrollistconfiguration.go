package shared

// AccessControlListConfiguration
// Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.
type AccessControlListConfiguration struct {
	KeyPath *string `json:"KeyPath,omitempty"`
}
