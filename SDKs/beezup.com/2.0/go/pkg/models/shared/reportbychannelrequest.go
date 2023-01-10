package shared

import (
	"time"
)

// ReportByChannelRequest
// Contains common filter parameters
type ReportByChannelRequest struct {
	AdvancedFilters             ReportAdvancedFilters              `json:"advancedFilters"`
	BeginPeriodUtcDate          *time.Time                         `json:"beginPeriodUtcDate,omitempty"`
	CategoryFilter              *BeezUpCommonCatalogCategoryFilter `json:"categoryFilter,omitempty"`
	ChannelID                   *string                            `json:"channelId,omitempty"`
	EndPeriodUtcDate            *time.Time                         `json:"endPeriodUtcDate,omitempty"`
	OrderBy                     *PerformanceIndicatorTypeEnum      `json:"orderBy,omitempty"`
	OrderByDirection            *OrderByDirectionEnum              `json:"orderByDirection,omitempty"`
	PageNumber                  *int32                             `json:"pageNumber,omitempty"`
	PageSize                    *int32                             `json:"pageSize,omitempty"`
	PerformanceIndicatorFilters []PerformanceIndicatorFilter       `json:"performanceIndicatorFilters,omitempty"`
	PeriodType                  ReportFilterPeriodTypeEnum         `json:"periodType"`
}
