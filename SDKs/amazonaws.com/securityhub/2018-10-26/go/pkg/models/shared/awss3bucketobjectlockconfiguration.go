// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AwsS3BucketObjectLockConfiguration -  The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
type AwsS3BucketObjectLockConfiguration struct {
	ObjectLockEnabled *string                                        `json:"ObjectLockEnabled,omitempty"`
	Rule              *AwsS3BucketObjectLockConfigurationRuleDetails `json:"Rule,omitempty"`
}
