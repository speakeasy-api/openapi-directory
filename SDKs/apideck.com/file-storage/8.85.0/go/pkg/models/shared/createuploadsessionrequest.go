package shared

type CreateUploadSessionRequest struct {
	DriveID        *string `json:"drive_id,omitempty"`
	Name           string  `json:"name"`
	ParentFolderID string  `json:"parent_folder_id"`
	Size           int64   `json:"size"`
}
