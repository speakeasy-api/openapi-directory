package shared

import (
	"time"
)

// OrderHistory
// Describe the history related to an order
type OrderHistory struct {
	ChangeOrderReportings   []ChangeOrderReporting  `json:"changeOrderReportings,omitempty"`
	HarvestOrderReportings  []HarvestOrderReporting `json:"harvestOrderReportings,omitempty"`
	LastModificationUtcDate *time.Time              `json:"lastModificationUtcDate,omitempty"`
}
