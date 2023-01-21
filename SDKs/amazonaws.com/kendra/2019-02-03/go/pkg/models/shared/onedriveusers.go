package shared

// OneDriveUsers
// User accounts whose documents should be indexed.
type OneDriveUsers struct {
	OneDriveUserList   []string `json:"OneDriveUserList,omitempty"`
	OneDriveUserS3Path *S3Path  `json:"OneDriveUserS3Path,omitempty"`
}
