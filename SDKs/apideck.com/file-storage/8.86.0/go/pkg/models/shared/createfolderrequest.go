package shared

type CreateFolderRequestInput struct {
	Description    *string `json:"description,omitempty"`
	DriveID        *string `json:"drive_id,omitempty"`
	Name           string  `json:"name"`
	ParentFolderID string  `json:"parent_folder_id"`
}
