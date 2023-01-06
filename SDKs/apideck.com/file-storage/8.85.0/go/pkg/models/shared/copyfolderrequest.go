package shared

type CopyFolderRequestInput struct {
	Name           *string `json:"name,omitempty"`
	ParentFolderID string  `json:"parent_folder_id"`
}
