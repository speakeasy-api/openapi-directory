// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AwsBackupRecoveryPointCalculatedLifecycleDetails - Specifies how long in days before a recovery point transitions to cold storage or is deleted.
type AwsBackupRecoveryPointCalculatedLifecycleDetails struct {
	DeleteAt            *string `json:"DeleteAt,omitempty"`
	MoveToColdStorageAt *string `json:"MoveToColdStorageAt,omitempty"`
}
