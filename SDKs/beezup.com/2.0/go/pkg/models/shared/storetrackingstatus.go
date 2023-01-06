package shared

import (
	"time"
)

type StoreTrackingStatus struct {
	ClickSynchronizationUtcDate           *time.Time `json:"clickSynchronizationUtcDate,omitempty"`
	MarketplaceOrderSynchonizationUtcDate *time.Time `json:"marketplaceOrderSynchonizationUtcDate,omitempty"`
	OrderSynchonizationUtcDate            *time.Time `json:"orderSynchonizationUtcDate,omitempty"`
}
