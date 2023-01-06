package shared

// S3MachineLearningModelResourceData1
// Attributes that define an Amazon S3 machine learning resource.
type S3MachineLearningModelResourceData1 struct {
	DestinationPath *string                        `json:"DestinationPath,omitempty"`
	OwnerSetting    *ResourceDownloadOwnerSetting1 `json:"OwnerSetting,omitempty"`
	S3URI           *string                        `json:"S3Uri,omitempty"`
}
