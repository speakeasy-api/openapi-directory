package shared

import (
	"time"
)

type DescribeDataSourceResponse struct {
	Configuration *DataSourceConfiguration `json:"Configuration,omitempty"`
	CreatedAt     *time.Time               `json:"CreatedAt,omitempty"`
	Description   *string                  `json:"Description,omitempty"`
	ErrorMessage  *string                  `json:"ErrorMessage,omitempty"`
	ID            *string                  `json:"Id,omitempty"`
	IndexID       *string                  `json:"IndexId,omitempty"`
	Name          *string                  `json:"Name,omitempty"`
	RoleArn       *string                  `json:"RoleArn,omitempty"`
	Schedule      *string                  `json:"Schedule,omitempty"`
	Status        *DataSourceStatusEnum    `json:"Status,omitempty"`
	Type          *DataSourceTypeEnum      `json:"Type,omitempty"`
	UpdatedAt     *time.Time               `json:"UpdatedAt,omitempty"`
}
