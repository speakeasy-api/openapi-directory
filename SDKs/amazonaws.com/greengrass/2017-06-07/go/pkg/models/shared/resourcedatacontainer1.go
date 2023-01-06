package shared

// ResourceDataContainer1
// A container for resource data. The container takes only one of the following supported resource data types: ”LocalDeviceResourceData”, ”LocalVolumeResourceData”, ”SageMakerMachineLearningModelResourceData”, ”S3MachineLearningModelResourceData”, ”SecretsManagerSecretResourceData”.
type ResourceDataContainer1 struct {
	LocalDeviceResourceData                   *LocalDeviceResourceData                   `json:"LocalDeviceResourceData,omitempty"`
	LocalVolumeResourceData                   *LocalVolumeResourceData                   `json:"LocalVolumeResourceData,omitempty"`
	S3MachineLearningModelResourceData        *S3MachineLearningModelResourceData1       `json:"S3MachineLearningModelResourceData,omitempty"`
	SageMakerMachineLearningModelResourceData *SageMakerMachineLearningModelResourceData `json:"SageMakerMachineLearningModelResourceData,omitempty"`
	SecretsManagerSecretResourceData          *SecretsManagerSecretResourceData          `json:"SecretsManagerSecretResourceData,omitempty"`
}
