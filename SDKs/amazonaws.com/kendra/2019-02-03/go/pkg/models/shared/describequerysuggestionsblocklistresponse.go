package shared

import (
	"time"
)

type DescribeQuerySuggestionsBlockListResponse struct {
	CreatedAt     *time.Time                           `json:"CreatedAt,omitempty"`
	Description   *string                              `json:"Description,omitempty"`
	ErrorMessage  *string                              `json:"ErrorMessage,omitempty"`
	FileSizeBytes *int64                               `json:"FileSizeBytes,omitempty"`
	ID            *string                              `json:"Id,omitempty"`
	IndexID       *string                              `json:"IndexId,omitempty"`
	ItemCount     *int64                               `json:"ItemCount,omitempty"`
	Name          *string                              `json:"Name,omitempty"`
	RoleArn       *string                              `json:"RoleArn,omitempty"`
	SourceS3Path  *S3Path                              `json:"SourceS3Path,omitempty"`
	Status        *QuerySuggestionsBlockListStatusEnum `json:"Status,omitempty"`
	UpdatedAt     *time.Time                           `json:"UpdatedAt,omitempty"`
}
