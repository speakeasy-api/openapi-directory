package shared

// UpdateTrailResponse
// Returns the objects or data listed below if successful. Otherwise, returns an error.
type UpdateTrailResponse struct {
	CloudWatchLogsLogGroupArn  *string                `json:"CloudWatchLogsLogGroupArn,omitempty"`
	CloudWatchLogsRoleArn      *string                `json:"CloudWatchLogsRoleArn,omitempty"`
	IncludeGlobalServiceEvents *bool                  `json:"IncludeGlobalServiceEvents,omitempty"`
	IsMultiRegionTrail         *bool                  `json:"IsMultiRegionTrail,omitempty"`
	IsOrganizationTrail        *bool                  `json:"IsOrganizationTrail,omitempty"`
	KmsKeyID                   *string                `json:"KmsKeyId,omitempty"`
	LogFileValidationEnabled   *bool                  `json:"LogFileValidationEnabled,omitempty"`
	Name                       *string                `json:"Name,omitempty"`
	S3BucketName               *string                `json:"S3BucketName,omitempty"`
	S3KeyPrefix                *string                `json:"S3KeyPrefix,omitempty"`
	SnsTopicARN                *string                `json:"SnsTopicARN,omitempty"`
	SnsTopicName               map[string]interface{} `json:"SnsTopicName,omitempty"`
	TrailARN                   *string                `json:"TrailARN,omitempty"`
}
