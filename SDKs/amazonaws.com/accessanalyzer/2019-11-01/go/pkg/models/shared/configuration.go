// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Configuration - Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
type Configuration struct {
	EbsSnapshot          *EbsSnapshotConfiguration          `json:"ebsSnapshot,omitempty"`
	EcrRepository        *EcrRepositoryConfiguration        `json:"ecrRepository,omitempty"`
	EfsFileSystem        *EfsFileSystemConfiguration        `json:"efsFileSystem,omitempty"`
	IamRole              *IamRoleConfiguration              `json:"iamRole,omitempty"`
	KmsKey               *KmsKeyConfiguration               `json:"kmsKey,omitempty"`
	RdsDbClusterSnapshot *RdsDbClusterSnapshotConfiguration `json:"rdsDbClusterSnapshot,omitempty"`
	RdsDbSnapshot        *RdsDbSnapshotConfiguration        `json:"rdsDbSnapshot,omitempty"`
	S3Bucket             *S3BucketConfiguration             `json:"s3Bucket,omitempty"`
	SecretsManagerSecret *SecretsManagerSecretConfiguration `json:"secretsManagerSecret,omitempty"`
	SnsTopic             *SnsTopicConfiguration             `json:"snsTopic,omitempty"`
	SqsQueue             *SqsQueueConfiguration             `json:"sqsQueue,omitempty"`
}
