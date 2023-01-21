package shared

import (
	"time"
)

type DescribeThesaurusResponse struct {
	CreatedAt        *time.Time           `json:"CreatedAt,omitempty"`
	Description      *string              `json:"Description,omitempty"`
	ErrorMessage     *string              `json:"ErrorMessage,omitempty"`
	FileSizeBytes    *int64               `json:"FileSizeBytes,omitempty"`
	ID               *string              `json:"Id,omitempty"`
	IndexID          *string              `json:"IndexId,omitempty"`
	Name             *string              `json:"Name,omitempty"`
	RoleArn          *string              `json:"RoleArn,omitempty"`
	SourceS3Path     *S3Path              `json:"SourceS3Path,omitempty"`
	Status           *ThesaurusStatusEnum `json:"Status,omitempty"`
	SynonymRuleCount *int64               `json:"SynonymRuleCount,omitempty"`
	TermCount        *int64               `json:"TermCount,omitempty"`
	UpdatedAt        *time.Time           `json:"UpdatedAt,omitempty"`
}
