package shared

import (
	"time"
)

// DataSourceSummary
// Summary information for a Amazon Kendra data source. Returned in a call to the <code>DescribeDataSource</code> operation.
type DataSourceSummary struct {
	CreatedAt *time.Time            `json:"CreatedAt,omitempty"`
	ID        *string               `json:"Id,omitempty"`
	Name      *string               `json:"Name,omitempty"`
	Status    *DataSourceStatusEnum `json:"Status,omitempty"`
	Type      *DataSourceTypeEnum   `json:"Type,omitempty"`
	UpdatedAt *time.Time            `json:"UpdatedAt,omitempty"`
}
