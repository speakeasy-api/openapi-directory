package shared

import (
	"time"
)

// IndexConfigurationSummary
// A summary of information about an index.
type IndexConfigurationSummary struct {
	CreatedAt time.Time         `json:"CreatedAt"`
	Edition   *IndexEditionEnum `json:"Edition,omitempty"`
	ID        *string           `json:"Id,omitempty"`
	Name      *string           `json:"Name,omitempty"`
	Status    IndexStatusEnum   `json:"Status"`
	UpdatedAt time.Time         `json:"UpdatedAt"`
}
