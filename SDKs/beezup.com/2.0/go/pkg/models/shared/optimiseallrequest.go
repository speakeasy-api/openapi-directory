package shared

import (
	"time"
)

// OptimiseAllRequest
// Contains common filter parameters
type OptimiseAllRequest struct {
	AdvancedFilters               ReportAdvancedFilters              `json:"advancedFilters"`
	AnalyticsProductColumnFilters *AnalyticsProductColumnFilters     `json:"analyticsProductColumnFilters,omitempty"`
	BeginPeriodUtcDate            time.Time                          `json:"beginPeriodUtcDate"`
	CategoryFilter                *BeezUpCommonCatalogCategoryFilter `json:"categoryFilter,omitempty"`
	ChannelID                     *string                            `json:"channelId,omitempty"`
	EndPeriodUtcDate              time.Time                          `json:"endPeriodUtcDate"`
	OrderBy                       *PerformanceIndicatorTypeEnum      `json:"orderBy,omitempty"`
	OrderByDirection              *OrderByDirectionEnum              `json:"orderByDirection,omitempty"`
	PerformanceIndicatorFilters   []PerformanceIndicatorFilter       `json:"performanceIndicatorFilters,omitempty"`
	PeriodType                    ReportFilterPeriodTypeEnum         `json:"periodType"`
	ProductColumnsToDisplay       []string                           `json:"productColumnsToDisplay,omitempty"`
	ProductState                  *ProductStateFilterEnum            `json:"productState,omitempty"`
	ReportType                    ReportTypeEnum                     `json:"reportType"`
}
