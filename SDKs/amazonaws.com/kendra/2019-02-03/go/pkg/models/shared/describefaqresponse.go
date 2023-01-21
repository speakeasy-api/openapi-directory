package shared

import (
	"time"
)

type DescribeFaqResponse struct {
	CreatedAt    *time.Time         `json:"CreatedAt,omitempty"`
	Description  *string            `json:"Description,omitempty"`
	ErrorMessage *string            `json:"ErrorMessage,omitempty"`
	FileFormat   *FaqFileFormatEnum `json:"FileFormat,omitempty"`
	ID           *string            `json:"Id,omitempty"`
	IndexID      *string            `json:"IndexId,omitempty"`
	Name         *string            `json:"Name,omitempty"`
	RoleArn      *string            `json:"RoleArn,omitempty"`
	S3Path       *S3Path            `json:"S3Path,omitempty"`
	Status       *FaqStatusEnum     `json:"Status,omitempty"`
	UpdatedAt    *time.Time         `json:"UpdatedAt,omitempty"`
}
