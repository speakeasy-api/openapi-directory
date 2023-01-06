package shared

import (
	"time"
)

type ResourceAttributesTypeEnum string

const (
	ResourceAttributesTypeEnumFile ResourceAttributesTypeEnum = "file"
	ResourceAttributesTypeEnumDir  ResourceAttributesTypeEnum = "dir"
)

// ResourceAttributes
// Attributes of resource
type ResourceAttributes struct {
	AccessedAt   *time.Time                  `json:"accessedAt,omitempty"`
	AccessedTime *int32                      `json:"accessedTime,omitempty"`
	CreatedAt    *time.Time                  `json:"createdAt,omitempty"`
	CreatedBy    *string                     `json:"createdBy,omitempty"`
	CreatedTime  *int32                      `json:"createdTime,omitempty"`
	Extension    *string                     `json:"extension,omitempty"`
	FileCount    *int64                      `json:"fileCount,omitempty"`
	Hash         *string                     `json:"hash,omitempty"`
	Name         *string                     `json:"name,omitempty"`
	Path         *string                     `json:"path,omitempty"`
	Previewable  *bool                       `json:"previewable,omitempty"`
	Size         *int64                      `json:"size,omitempty"`
	Type         *ResourceAttributesTypeEnum `json:"type,omitempty"`
	UpdatedAt    *time.Time                  `json:"updatedAt,omitempty"`
	UpdatedTime  *int32                      `json:"updatedTime,omitempty"`
	UploadDate   *time.Time                  `json:"uploadDate,omitempty"`
}
