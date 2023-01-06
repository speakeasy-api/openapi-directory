package shared

import (
	"time"
)

type AccountSynchronization struct {
	AccountID                      int32      `json:"accountId"`
	CompletedHarvestSynchroUtcDate *time.Time `json:"completedHarvestSynchroUtcDate,omitempty"`
	MarketplaceBusinessCode        string     `json:"marketplaceBusinessCode"`
	MarketplaceTechnicalCode       string     `json:"marketplaceTechnicalCode"`
}
