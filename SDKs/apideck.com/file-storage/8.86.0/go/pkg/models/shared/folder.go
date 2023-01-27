package shared

import (
	"time"
)

type Folder struct {
	CreatedAt             *time.Time     `json:"created_at,omitempty"`
	CreatedBy             *string        `json:"created_by,omitempty"`
	Description           *string        `json:"description,omitempty"`
	ID                    *string        `json:"id,omitempty"`
	Name                  string         `json:"name"`
	Owner                 *Owner         `json:"owner,omitempty"`
	ParentFolders         []LinkedFolder `json:"parent_folders"`
	ParentFoldersComplete *bool          `json:"parent_folders_complete,omitempty"`
	Path                  *string        `json:"path,omitempty"`
	Size                  *int64         `json:"size,omitempty"`
	UpdatedAt             *time.Time     `json:"updated_at,omitempty"`
	UpdatedBy             *string        `json:"updated_by,omitempty"`
}
