package shared

import (
	"time"
)

type TrackingStatus struct {
	ClickSynchronizationUtcDate           time.Time `json:"clickSynchronizationUtcDate"`
	MarketplaceOrderSynchonizationUtcDate time.Time `json:"marketplaceOrderSynchonizationUtcDate"`
	OrderSynchonizationUtcDate            time.Time `json:"orderSynchonizationUtcDate"`
}
