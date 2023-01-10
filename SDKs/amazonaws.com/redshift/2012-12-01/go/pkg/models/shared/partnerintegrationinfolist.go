package shared

import (
	"time"
)

// PartnerIntegrationInfoList
// Describes a partner integration.
type PartnerIntegrationInfoList struct {
	CreatedAt     *time.Time
	DatabaseName  *string
	PartnerName   *string
	Status        *PartnerIntegrationStatusEnum
	StatusMessage *string
	UpdatedAt     *time.Time
}
