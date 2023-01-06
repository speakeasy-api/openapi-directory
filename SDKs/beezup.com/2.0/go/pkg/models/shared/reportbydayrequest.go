package shared

import (
	"time"
)

type ReportByDayRequest struct {
	AdvancedFilters    *ReportAdvancedFilters `json:"advancedFilters,omitempty"`
	BeginPeriodUtcDate time.Time              `json:"beginPeriodUtcDate"`
	CatalogCategoryID  *string                `json:"catalogCategoryId,omitempty"`
	ChannelIds         []string               `json:"channelIds,omitempty"`
	EndPeriodUtcDate   time.Time              `json:"endPeriodUtcDate"`
	ProductID          *string                `json:"productId,omitempty"`
}
