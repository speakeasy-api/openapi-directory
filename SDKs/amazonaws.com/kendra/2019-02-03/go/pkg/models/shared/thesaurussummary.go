package shared

import (
	"time"
)

// ThesaurusSummary
// An array of summary information for one or more thesauruses.
type ThesaurusSummary struct {
	CreatedAt *time.Time           `json:"CreatedAt,omitempty"`
	ID        *string              `json:"Id,omitempty"`
	Name      *string              `json:"Name,omitempty"`
	Status    *ThesaurusStatusEnum `json:"Status,omitempty"`
	UpdatedAt *time.Time           `json:"UpdatedAt,omitempty"`
}
