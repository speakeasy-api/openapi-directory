package shared

import (
	"time"
)

// HarvestOrderReporting
// The reporting related to a harvest order operation
type HarvestOrderReporting struct {
	BeezUPForcedStatus *string    `json:"beezUPForcedStatus,omitempty"`
	BeezUPStatus       *string    `json:"beezUPStatus,omitempty"`
	CreationUtcDate    *time.Time `json:"creationUtcDate,omitempty"`
	ErrorMessage       *string    `json:"errorMessage,omitempty"`
	ExecutionUUID      *string    `json:"executionUUID,omitempty"`
	LastUpdateUtcDate  *time.Time `json:"lastUpdateUtcDate,omitempty"`
	MarketplaceStatus  *string    `json:"marketplaceStatus,omitempty"`
	ProcessingStatus   *string    `json:"processingStatus,omitempty"`
	WarningMessage     *string    `json:"warningMessage,omitempty"`
}
