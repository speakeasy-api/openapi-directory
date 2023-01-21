package shared

import (
	"time"
)

// FaqSummary
// Provides information about a frequently asked questions and answer contained in an index.
type FaqSummary struct {
	CreatedAt  *time.Time         `json:"CreatedAt,omitempty"`
	FileFormat *FaqFileFormatEnum `json:"FileFormat,omitempty"`
	ID         *string            `json:"Id,omitempty"`
	Name       *string            `json:"Name,omitempty"`
	Status     *FaqStatusEnum     `json:"Status,omitempty"`
	UpdatedAt  *time.Time         `json:"UpdatedAt,omitempty"`
}
