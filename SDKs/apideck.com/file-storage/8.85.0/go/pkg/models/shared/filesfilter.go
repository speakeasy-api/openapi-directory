package shared

type FilesFilter struct {
	DriveID  *string `queryParam:"name=drive_id"`
	FolderID *string `queryParam:"name=folder_id"`
	Shared   *bool   `queryParam:"name=shared"`
}
