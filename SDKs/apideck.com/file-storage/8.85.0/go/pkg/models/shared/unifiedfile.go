package shared

import (
	"time"
)

type UnifiedFile struct {
	CreatedAt             *time.Time     `json:"created_at,omitempty"`
	CreatedBy             *string        `json:"created_by,omitempty"`
	Description           *string        `json:"description,omitempty"`
	Downloadable          *bool          `json:"downloadable,omitempty"`
	DownstreamID          *string        `json:"downstream_id,omitempty"`
	ID                    string         `json:"id"`
	MimeType              *string        `json:"mime_type,omitempty"`
	Name                  string         `json:"name"`
	Owner                 *Owner         `json:"owner,omitempty"`
	ParentFolders         []LinkedFolder `json:"parent_folders,omitempty"`
	ParentFoldersComplete *bool          `json:"parent_folders_complete,omitempty"`
	Path                  *string        `json:"path,omitempty"`
	Size                  *int64         `json:"size,omitempty"`
	Type                  FileTypeEnum   `json:"type"`
	UpdatedAt             *time.Time     `json:"updated_at,omitempty"`
	UpdatedBy             *string        `json:"updated_by,omitempty"`
}
