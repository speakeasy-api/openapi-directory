package shared

type UpdateFolderRequestInput struct {
	Description    *string `json:"description,omitempty"`
	Name           *string `json:"name,omitempty"`
	ParentFolderID *string `json:"parent_folder_id,omitempty"`
}
